import React, { useState } from 'react';

const inputClasses =
  'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

const labelClasses = 'block text-sm font-medium text-foreground mb-1';

const buttonClasses =
  'inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

const TransactionForm: React.FC = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      description,
      amount,
      date,
      type,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="description" className={labelClasses}>
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <label htmlFor="amount" className={labelClasses}>
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <label htmlFor="date" className={labelClasses}>
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={inputClasses}
          required
        />
      </div>
      <div>
        <label htmlFor="type" className={labelClasses}>
          Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={inputClasses}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>
      <button type="submit" className={buttonClasses}>
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
