import React from 'react';
import TotalBalanceCard from './TotalBalanceCard';
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';
import RecentTransactions from './RecentTransactions';
import SpendingByCategory from './SpendingByCategory';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-4 text-xl font-semibold text-primary">Dashboard</h2>
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
