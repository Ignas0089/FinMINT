import React from 'react';
import { mockData } from '../lib/mockData';
import TotalBalanceCard from './TotalBalanceCard';
import IncomeCard from './IncomeCard';
import ExpenseCard from './ExpenseCard';
import RecentTransactions from './RecentTransactions';
import SpendingByCategory from './SpendingByCategory';

const Dashboard: React.FC = () => {
  const {
    totalBalance,
    income,
    expenses,
    recentTransactions,
    spendingByCategory,
  } = mockData;

  return (
    <div>
      <h2 className="text-xl font-semibold text-primary mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <TotalBalanceCard label="Total Balance" amount={totalBalance} />
        <IncomeCard label="Income" amount={income} />
        <ExpenseCard label="Expenses" amount={expenses} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <RecentTransactions transactions={recentTransactions} />
        <SpendingByCategory categories={spendingByCategory} />
      </div>
    </div>
  );
};

export default Dashboard;
