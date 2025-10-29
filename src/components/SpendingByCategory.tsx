import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import { mockData, type CategorySpending } from '../lib/mockData';
import { formatCurrency } from '../lib/formatters';

const SpendingByCategory: React.FC = () => {
  const categories: CategorySpending[] = mockData.spendingByCategory;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.category} className="flex items-center justify-between">
              <p className="font-medium text-foreground">{category.category}</p>
              <p className="text-sm font-semibold text-muted-foreground">
                {formatCurrency(category.amount)}
              </p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SpendingByCategory;
