import { isDeepStrictEqual } from 'node:util';

function createSuite(name) {
  return {
    name,
    tests: [],
    suites: [],
    beforeEach: [],
    afterEach: [],
  };
}

let rootSuite = createSuite('root');
let currentSuite = rootSuite;
let summary = { passed: 0, failed: 0 };

const matcherRegistry = new Map();

function registerDefaultMatchers() {
  matcherRegistry.set('toBe', (received, expected) => ({
    pass: Object.is(received, expected),
    message: `Expected ${received} to be ${expected}`,
  }));
  matcherRegistry.set('toEqual', (received, expected) => ({
    pass: isDeepStrictEqual(received, expected),
    message: `Expected ${JSON.stringify(received)} to equal ${JSON.stringify(expected)}`,
  }));
  matcherRegistry.set('toBeTruthy', (received) => ({
    pass: !!received,
    message: `Expected value to be truthy but received ${received}`,
  }));
  matcherRegistry.set('toBeFalsy', (received) => ({
    pass: !received,
    message: `Expected value to be falsy but received ${received}`,
  }));
}

registerDefaultMatchers();

function buildMatchers(received, isNot = false) {
  const api = {};
  for (const [name, matcher] of matcherRegistry.entries()) {
    api[name] = (...args) => {
      const result = matcher(received, ...args);
      const pass = isNot ? !result.pass : result.pass;
      if (!pass) {
        throw new Error(result.message);
      }
    };
  }
  Object.defineProperty(api, 'not', {
    get() {
      return buildMatchers(received, !isNot);
    },
  });
  return api;
}

export function expect(received) {
  return buildMatchers(received);
}

expect.extend = function extend(newMatchers) {
  for (const [name, matcher] of Object.entries(newMatchers)) {
    matcherRegistry.set(name, (received, ...args) => {
      const result = matcher(received, ...args);
      if (typeof result === 'object' && result !== null && 'pass' in result) {
        return result;
      }
      return {
        pass: !!result,
        message: `Expectation ${name} failed`,
      };
    });
  }
};

export function resetRuntime(fileLabel) {
  rootSuite = createSuite(fileLabel);
  currentSuite = rootSuite;
  summary = { passed: 0, failed: 0 };
}

export function describe(name, fn) {
  const parent = currentSuite;
  const suite = createSuite(name);
  parent.suites.push(suite);
  currentSuite = suite;
  try {
    fn();
  } finally {
    currentSuite = parent;
  }
}

export function it(name, fn) {
  currentSuite.tests.push({ name, fn });
}

export const test = it;

export function beforeEach(fn) {
  currentSuite.beforeEach.push(fn);
}

export function afterEach(fn) {
  currentSuite.afterEach.push(fn);
}

function hookList(suites, key, reverse = false) {
  const ordered = reverse ? [...suites].reverse() : suites;
  const hooks = [];
  for (const suite of ordered) {
    hooks.push(...suite[key]);
  }
  return hooks;
}

async function runSuite(suite, ancestors) {
  const lineage = [...ancestors, suite];
  for (const child of suite.suites) {
    await runSuite(child, lineage);
  }
  const beforeEachHooks = hookList(lineage, 'beforeEach');
  const afterEachHooks = hookList(lineage, 'afterEach', true);
  for (const testCase of suite.tests) {
    for (const hook of beforeEachHooks) {
      await hook();
    }
    try {
      await testCase.fn();
      summary.passed += 1;
      const namePath = [...ancestors.map((s) => s.name), suite.name, testCase.name]
        .filter(Boolean)
        .join(' › ');
      console.log(`\x1b[32m✓\x1b[0m ${namePath}`);
    } catch (error) {
      summary.failed += 1;
      const namePath = [...ancestors.map((s) => s.name), suite.name, testCase.name]
        .filter(Boolean)
        .join(' › ');
      console.error(`\x1b[31m✖\x1b[0m ${namePath}`);
      console.error(error?.stack ?? error);
    }
    for (const hook of afterEachHooks) {
      await hook();
    }
  }
}

export async function runCurrentSuite() {
  await runSuite(rootSuite, []);
  return { ...summary };
}

export function getSummary() {
  return { ...summary };
}
