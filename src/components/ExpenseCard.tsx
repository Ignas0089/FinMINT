import React from 'react';
import Card from './ui/Card';
import type { SummaryCardProps } from './ui/Card';

type ExpenseCardProps = Omit<SummaryCardProps, 'label'> & {
  label?: string;
};

const ExpenseCard: React.FC<ExpenseCardProps> = ({ label = 'Expenses', amount, trend }) => (
  <Card label={label} amount={amount} trend={trend} />
);

export default ExpenseCard;
export type { ExpenseCardProps };
