import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { mockData } from '../lib/mockData';
import { formatCurrency } from '../lib/formatters';

const TotalBalanceCard: React.FC = () => {
  return (
    <Card className="bg-primary/5">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-primary">Total Balance</CardTitle>
          <CardDescription>Available across all accounts</CardDescription>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-2xl text-primary">
          💼
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight text-primary">
          {formatCurrency(mockData.totalBalance)}
        </p>
      </CardContent>
    </Card>
  );
};

export default TotalBalanceCard;
