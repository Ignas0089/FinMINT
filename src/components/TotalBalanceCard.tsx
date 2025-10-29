import React from 'react';
import Card from './ui/Card';
import type { SummaryCardProps } from './ui/Card';

type TotalBalanceCardProps = Omit<SummaryCardProps, 'label'> & {
  label?: string;
};

const TotalBalanceCard: React.FC<TotalBalanceCardProps> = ({ label = 'Total Balance', amount, trend }) => (
  <Card label={label} amount={amount} trend={trend} />
);

export default TotalBalanceCard;
export type { TotalBalanceCardProps };
