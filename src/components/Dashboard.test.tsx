import { render, screen, within } from '@testing-library/react';
import React from 'react';
import Dashboard from './Dashboard';
import { mockData } from '../lib/mockData';

describe('Dashboard', () => {
  it('renders summary cards, recent transactions, and spending categories', () => {
    render(<Dashboard />);

    expect(screen.getByText('Total Balance')).toBeInTheDocument();
    expect(screen.getByText('Income')).toBeInTheDocument();
    expect(screen.getByText('Expenses')).toBeInTheDocument();

    const transactionsSection = screen.getByRole('heading', {
      name: /recent transactions/i,
      level: 3,
    }).parentElement;
    expect(transactionsSection).not.toBeNull();

    const transactionItems = within(transactionsSection as HTMLElement).getAllByRole('listitem');
    expect(transactionItems).toHaveLength(mockData.recentTransactions.length);

    mockData.recentTransactions.forEach((transaction) => {
      expect(screen.getByText(transaction.name)).toBeInTheDocument();
    });

    const categoriesSection = screen.getByRole('heading', {
      name: /spending by category/i,
      level: 3,
    }).parentElement;
    expect(categoriesSection).not.toBeNull();

    const categoryItems = within(categoriesSection as HTMLElement).getAllByRole('listitem');
    expect(categoryItems).toHaveLength(mockData.spendingByCategory.length);

    mockData.spendingByCategory.forEach((category) => {
      expect(screen.getByText(category.category)).toBeInTheDocument();
    });
  });
});
