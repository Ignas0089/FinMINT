import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

interface IncomeCardProps {
  income: number;
  className?: string;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const IncomeCard: React.FC<IncomeCardProps> = ({ income, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Income</CardTitle>
        <CardDescription>Money coming into your accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold text-emerald-500">{formatCurrency(income)}</p>
      </CardContent>
    </Card>
  );
};

export default IncomeCard;
