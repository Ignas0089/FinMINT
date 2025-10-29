import React from 'react';
import { mockData, type DashboardData } from '../lib/mockData';
import Card from './ui/Card';
import RecentTransactions from './RecentTransactions';
import SpendingByCategory from './SpendingByCategory';

const Dashboard: React.FC = () => {
  const dashboardData: DashboardData = mockData;

  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Balance" amount={dashboardData.totalBalance} />
        <Card title="Income" amount={dashboardData.income} />
        <Card title="Expenses" amount={dashboardData.expenses} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <RecentTransactions />
        <SpendingByCategory />
      </div>
    </div>
  );
};

export default Dashboard;
