import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

interface TotalBalanceCardProps {
  totalBalance: number;
}

const TotalBalanceCard: React.FC<TotalBalanceCardProps> = ({ totalBalance }) => {
  return (
    <Card className="bg-card/95">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle>Total Balance</CardTitle>
          <CardDescription>Available across all accounts</CardDescription>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-2xl">
          💼
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight text-primary">
          ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
      </CardContent>
    </Card>
  );
};

export default TotalBalanceCard;
