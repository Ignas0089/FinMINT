import React from 'react';
import { mockData, type CategorySpending } from '../lib/mockData';

const SpendingByCategory: React.FC = () => {
  const categories: CategorySpending[] = mockData.spendingByCategory;

  return (
    <div className="bg-card p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-card-foreground mb-2">Spending by Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.category} className="flex justify-between items-center py-2">
            <p className="font-medium">{category.category}</p>
            <p className="font-semibold">${category.amount.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpendingByCategory;
