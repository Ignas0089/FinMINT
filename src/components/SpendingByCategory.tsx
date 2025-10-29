import React from 'react';
import { mockData } from '../lib/mockData';

const SpendingByCategory: React.FC = () => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-card-foreground mb-2">Spending by Category</h3>
      <ul>
        {mockData.spendingByCategory.map((category) => (
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
