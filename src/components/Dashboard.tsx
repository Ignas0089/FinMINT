import React from 'react';
import { mockData, type DashboardData } from '../lib/mockData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import RecentTransactions from './RecentTransactions';
import SpendingByCategory from './SpendingByCategory';

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

const Dashboard: React.FC = () => {
  const dashboardData: DashboardData = mockData;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-4 text-xl font-semibold text-primary">Dashboard</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-card/95">
            <CardHeader>
              <CardTitle>Total Balance</CardTitle>
              <CardDescription>Available across all accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-primary">
                {formatCurrency(dashboardData.totalBalance)}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-emerald-950/5">
            <CardHeader>
              <CardTitle>Monthly Income</CardTitle>
              <CardDescription>Month to date</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-emerald-600">
                {formatCurrency(dashboardData.income)}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-rose-950/5">
            <CardHeader>
              <CardTitle>Monthly Expenses</CardTitle>
              <CardDescription>Month to date</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-rose-600">
                {formatCurrency(dashboardData.expenses)}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentTransactions />
        <SpendingByCategory />
      </div>
    </div>
  );
};

export default Dashboard;
