import React from 'react';
import { mockData } from '../lib/mockData';
import Card from './ui/Card';
import RecentTransactions from './RecentTransactions';
import SpendingByCategory from './SpendingByCategory';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Balance" amount={mockData.totalBalance} />
        <Card title="Income" amount={mockData.income} />
        <Card title="Expenses" amount={mockData.expenses} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <RecentTransactions />
        <SpendingByCategory />
      </div>
    </div>
  );
};

export default Dashboard;
