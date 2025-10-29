import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dashboard from './Dashboard';
import { mockData } from '../lib/mockData';

describe('Dashboard', () => {
  it('renders the summary cards', () => {
    render(<Dashboard />);

    expect(screen.getByText('Total Balance')).toBeInTheDocument();
    expect(screen.getByText('Income')).toBeInTheDocument();
    expect(screen.getByText('Expenses')).toBeInTheDocument();

    expect(
      screen.getByText(`$${mockData.totalBalance.toLocaleString()}`)
    ).toBeInTheDocument();
    expect(screen.getByText(`$${mockData.income.toLocaleString()}`)).toBeInTheDocument();
    expect(screen.getByText(`$${mockData.expenses.toLocaleString()}`)).toBeInTheDocument();
  });

  it('renders the recent transactions list', () => {
    render(<Dashboard />);

    for (const transaction of mockData.recentTransactions) {
      expect(screen.getByText(transaction.name)).toBeInTheDocument();
      expect(screen.getByText(transaction.date)).toBeInTheDocument();
    }
  });

  it('renders spending categories', () => {
    render(<Dashboard />);

    for (const category of mockData.spendingByCategory) {
      expect(screen.getByText(category.category)).toBeInTheDocument();
      expect(
        screen.getByText(`$${category.amount.toLocaleString()}`)
      ).toBeInTheDocument();
    }
  });
});
