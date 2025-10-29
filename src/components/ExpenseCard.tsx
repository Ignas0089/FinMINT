import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

interface ExpenseCardProps {
  expenses: number;
  className?: string;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expenses, className }) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Expenses</CardTitle>
        <CardDescription>Money going out of your accounts</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold text-destructive">{formatCurrency(expenses)}</p>
      </CardContent>
    </Card>
  );
};

export default ExpenseCard;
