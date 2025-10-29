import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

let lastMarkup = '';

function createElementHandle(text) {
  return {
    __found: true,
    text,
    toString() {
      return text;
    },
  };
}

function collectMatches(markup, text) {
  const normalized = String(text);
  const results = [];
  let index = markup.indexOf(normalized);
  while (index !== -1) {
    results.push(createElementHandle(normalized));
    index = markup.indexOf(normalized, index + normalized.length);
  }
  return results;
}

function ensureMatches(markup, text) {
  const matches = collectMatches(markup, text);
  if (matches.length === 0) {
    throw new Error(`Unable to find an element with text: ${text}`);
  }
  return matches;
}

function buildScreenAccessors(getMarkup) {
  return {
    getByText(text) {
      return ensureMatches(getMarkup(), text)[0];
    },
    getAllByText(text) {
      return ensureMatches(getMarkup(), text);
    },
    queryByText(text) {
      const matches = collectMatches(getMarkup(), text);
      return matches[0] ?? null;
    },
    queryAllByText(text) {
      return collectMatches(getMarkup(), text);
    },
  };
}

export function render(ui) {
  lastMarkup = renderToStaticMarkup(ui);
  const accessors = buildScreenAccessors(() => lastMarkup);
  return {
    container: lastMarkup,
    ...accessors,
  };
}

export const screen = buildScreenAccessors(() => {
  if (!lastMarkup) {
    throw new Error('No render has been called yet.');
  }
  return lastMarkup;
});

export function cleanup() {
  lastMarkup = '';
}
