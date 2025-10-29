import React from 'react';

interface CardProps {
  title: string;
  amount: number;
}

const Card: React.FC<CardProps> = ({ title, amount }) => {
  return (
    <div className="bg-card p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="text-2xl text-primary">${amount.toLocaleString()}</p>
    </div>
  );
};

export default Card;
