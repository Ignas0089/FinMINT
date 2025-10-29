import test from 'node:test';
import assert from 'node:assert/strict';
import { getDashboardMarkup } from '../src/modules/dashboard.js';
import { mockData } from '../src/modules/mockData.js';
import { formatCurrency, formatSignedCurrency, formatDate } from '../src/modules/formatters.js';

test('summary cards render key financial metrics', () => {
  const markup = getDashboardMarkup();

  assert.ok(markup.includes(formatCurrency(mockData.totalBalance)), 'total balance value missing');
  assert.ok(markup.includes(formatCurrency(mockData.monthlyIncome)), 'monthly income value missing');
  assert.ok(markup.includes(formatCurrency(mockData.monthlyExpenses)), 'monthly expenses value missing');
});

test('recent transactions include formatted entries', () => {
  const markup = getDashboardMarkup();

  for (const transaction of mockData.recentTransactions) {
    assert.ok(markup.includes(transaction.name), `transaction name ${transaction.name} missing`);
    assert.ok(
      markup.includes(formatDate(transaction.date)),
      `transaction date ${transaction.date} missing`,
    );
    assert.ok(
      markup.includes(formatSignedCurrency(transaction.amount)),
      `transaction amount for ${transaction.name} missing`,
    );
  }
});

test('spending categories list every category with amounts', () => {
  const markup = getDashboardMarkup();

  for (const category of mockData.spendingByCategory) {
    assert.ok(markup.includes(category.category), `category ${category.category} missing`);
    assert.ok(
      markup.includes(formatCurrency(category.amount)),
      `category amount for ${category.category} missing`,
    );
  }
});
