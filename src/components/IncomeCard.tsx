import React from 'react';
import { mockData } from '../lib/mockData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';

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
