import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import { mockData } from '../lib/mockData';

const ExpenseCard: React.FC = () => {
  return (
    <Card className="bg-rose-950/5">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-rose-700">Expenses</CardTitle>
          <CardDescription>Tracked spending</CardDescription>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/10 text-2xl text-rose-600">
          📉
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight text-rose-600">
          ${mockData.expenses.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </p>
      </CardContent>
    </Card>
  );
};

export default ExpenseCard;
