import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { mockData, type Transaction } from '../lib/mockData';
import { formatSignedCurrency } from '../lib/formatters';

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = mockData.recentTransactions;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="flex items-start justify-between">
              <div>
                <p className="font-medium text-foreground">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString()}
                </p>
              </div>
              <p
                className="text-right text-sm font-semibold"
                data-testid={`transaction-amount-${transaction.id}`}
              >
                <span className={transaction.amount >= 0 ? 'text-emerald-600' : 'text-rose-600'}>
                  {formatSignedCurrency(transaction.amount)}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentTransactions;
