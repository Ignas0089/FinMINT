import React from 'react';
import { mockData } from '../lib/mockData';

const RecentTransactions: React.FC = () => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-card-foreground mb-2">Recent Transactions</h3>
      <ul>
        {mockData.recentTransactions.map((transaction) => (
          <li key={transaction.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
            <div>
              <p className="font-medium">{transaction.name}</p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
            <p className={`font-semibold ${transaction.amount > 0 ? 'text-primary' : 'text-foreground'}`}>
              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
