import React from 'react';
import type { CategorySpending } from '../lib/mockData';

interface SpendingByCategoryProps {
  categories: CategorySpending[];
}

const SpendingByCategory: React.FC<SpendingByCategoryProps> = ({ categories }) => {
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
