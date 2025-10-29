import React from 'react';
import { mockData } from '../lib/mockData';
import { mockData, type DashboardData } from '../lib/mockData';
import { Card } from './ui/Card';
import TotalBalanceCard from './TotalBalanceCard';
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';
import RecentTransactions from './RecentTransactions';
import SpendingByCategory from './SpendingByCategory';

const Dashboard: React.FC = () => {
  const dashboardData: DashboardData = mockData;

  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TotalBalanceCard balance={mockData.totalBalance} />
        <IncomeCard income={mockData.income} />
        <ExpenseCard expenses={mockData.expenses} />
        <Card title="Total Balance" amount={dashboardData.totalBalance} />
        <Card title="Income" amount={dashboardData.income} />
        <Card title="Expenses" amount={dashboardData.expenses} />
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <TotalBalanceCard />
          <IncomeCard />
          <ExpenseCard />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentTransactions />
        <SpendingByCategory />
      </div>
    </div>
  );
};

export default Dashboard;
