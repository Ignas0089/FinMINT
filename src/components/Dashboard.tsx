import React from 'react';
import { mockData, type DashboardData } from '../lib/mockData';
import { mockData } from '../lib/mockData';
import TotalBalanceCard from './TotalBalanceCard';
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';
import RecentTransactions from './RecentTransactions';
import SpendingByCategory from './SpendingByCategory';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const Dashboard: React.FC = () => {
  const {
    totalBalance,
    income,
    expenses,
    recentTransactions,
    spendingByCategory,
  } = mockData;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-4 text-xl font-semibold text-primary">Dashboard</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <TotalBalanceCard totalBalance={dashboardData.totalBalance} />
          <IncomeCard monthlyIncome={dashboardData.monthlyIncome} />
          <ExpenseCard monthlyExpenses={dashboardData.monthlyExpenses} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <RecentTransactions transactions={recentTransactions} />
        <SpendingByCategory categories={spendingByCategory} />
      </div>
    </div>
  );
};

export default Dashboard;
