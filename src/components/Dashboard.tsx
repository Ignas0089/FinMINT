import React from 'react';
import { mockData, type DashboardData } from '../lib/mockData';
import TotalBalanceCard from './TotalBalanceCard';
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';
import RecentTransactions from './RecentTransactions';
import SpendingByCategory from './SpendingByCategory';

const Dashboard: React.FC = () => {
  const dashboardData: DashboardData = mockData;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-2">Dashboard</h2>
        <p className="text-sm text-muted-foreground">
          Overview of your finances with {dashboardData.recentTransactions.length} recent transactions.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
