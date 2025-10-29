import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { mockData } from '../src/mockData.js';
import { formatCurrency, renderDashboard } from '../src/dashboard.js';

class FakeClassList {
  constructor() {
    this._classes = new Set();
  }

  add(...classes) {
    classes.forEach((cls) => this._classes.add(cls));
  }

  toString() {
    return Array.from(this._classes).join(' ');
  }
}

class FakeElement {
  constructor(tagName) {
    this.tagName = tagName.toLowerCase();
    this.children = [];
    this.className = '';
    this._text = '';
    this.attributes = new Map();
    this.classList = new FakeClassList();
  }

  append(...nodes) {
    nodes.forEach((node) => this.appendChild(node));
  }

  appendChild(node) {
    this.children.push(node);
    return node;
  }

  setAttribute(name, value) {
    this.attributes.set(name, value);
  }

  set textContent(value) {
    this._text = value;
  }

  get textContent() {
    return this._text;
  }

  set innerHTML(value) {
    if (value === '') {
      this.children = [];
      this._text = '';
    }
  }
}

class FakeDocument {
  constructor() {
    this.body = new FakeElement('body');
    this.created = [];
  }

  createElement(tagName) {
    const element = new FakeElement(tagName);
    this.created.push(element);
    return element;
  }
}

describe('formatCurrency', () => {
  it('formats numbers as USD currency strings', () => {
    assert.equal(formatCurrency(1234.56), '$1,234.56');
    assert.equal(formatCurrency(-10.5), '-$10.50');
  });
});

describe('renderDashboard', () => {
  it('renders heading, summary cards, and data panels', () => {
    const fakeDocument = new FakeDocument();
    global.document = fakeDocument;

    const root = new FakeElement('div');
    renderDashboard(root, mockData);

    assert.equal(root.children.length, 3, 'root should contain three child nodes');

    const [heading, cardsGrid, dataGrid] = root.children;
    assert.equal(heading.tagName, 'h2');
    assert.equal(cardsGrid.tagName, 'section');
    assert.equal(dataGrid.tagName, 'section');

    assert.equal(cardsGrid.children.length, 3, 'summary cards should render three entries');

    const [transactionsPanel, categoriesPanel] = dataGrid.children;
    assert.equal(transactionsPanel.children.length > 0, true, 'transactions panel has content');
    assert.equal(categoriesPanel.children.length > 0, true, 'categories panel has content');

    delete global.document;
  });
});
