import React from 'react';
import { mockData } from '../lib/mockData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

interface IncomeCardProps {
  monthlyIncome: number;
}

const IncomeCard: React.FC<IncomeCardProps> = ({ monthlyIncome }) => {
import { mockData } from '../lib/mockData';
import { formatCurrency } from '../lib/formatters';

const IncomeCard: React.FC = () => {
  return (
    <Card className="bg-emerald-50">
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
          ${monthlyIncome.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
      </CardContent>
    </Card>
  );
};

export default IncomeCard;
