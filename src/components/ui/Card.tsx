import React from 'react';

export type TrendDirection = 'up' | 'down';

export interface TrendIndicator {
  direction: TrendDirection;
  value: number;
  suffix?: string;
}

export interface SummaryCardProps {
  label: string;
  amount: number;
  trend?: TrendIndicator;
}

const Card: React.FC<SummaryCardProps> = ({ label, amount, trend }) => {
  const trendClassName = trend?.direction === 'down' ? 'text-destructive' : 'text-emerald-500';

  return (
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-card-foreground">{label}</h3>
      <p className="text-2xl text-primary">${amount.toLocaleString()}</p>
      {trend && (
        <p className={`text-sm font-medium mt-2 flex items-center ${trendClassName}`}>
          <span className="mr-1">{trend.direction === 'down' ? '▼' : '▲'}</span>
          {trend.value}
          {trend.suffix ?? '%'}
        </p>
      )}
    </div>
  );
};

export default Card;
