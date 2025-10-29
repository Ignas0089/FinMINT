import React from 'react';
import Card from './ui/Card';
import type { SummaryCardProps } from './ui/Card';

type IncomeCardProps = Omit<SummaryCardProps, 'label'> & {
  label?: string;
};

const IncomeCard: React.FC<IncomeCardProps> = ({ label = 'Income', amount, trend }) => (
  <Card label={label} amount={amount} trend={trend} />
);

export default IncomeCard;
export type { IncomeCardProps };
