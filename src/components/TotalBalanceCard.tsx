import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

interface TotalBalanceCardProps {
  balance: number;
  className?: string;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const TotalBalanceCard: React.FC<TotalBalanceCardProps> = ({ balance, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Total Balance</CardTitle>
        <CardDescription>Your current account balance</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold text-primary">{formatCurrency(balance)}</p>
      </CardContent>
    </Card>
  );
};

export default TotalBalanceCard;
