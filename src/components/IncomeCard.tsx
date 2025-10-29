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
import { mockData } from '../lib/mockData';

const IncomeCard: React.FC = () => {
  return (
    <Card className="bg-emerald-950/5">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-emerald-700">Income</CardTitle>
          <CardDescription>Month to date</CardDescription>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-2xl text-emerald-600">
          📈
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight text-emerald-600">
          ${mockData.income.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
      </CardContent>
    </Card>
  );
};

export default IncomeCard;
