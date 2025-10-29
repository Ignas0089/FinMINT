export const mockData = {
  totalBalance: 12345.67,
  income: 4500.0,
  expenses: 1250.0,
  recentTransactions: [
    { id: 1, name: 'Spotify', date: '2024-07-28', amount: -10.99 },
    { id: 2, name: 'Salary', date: '2024-07-25', amount: 4500.0 },
    { id: 3, name: 'Groceries', date: '2024-07-23', amount: -75.43 },
    { id: 4, name: 'Rent', date: '2024-07-22', amount: -1100.0 },
    { id: 5, name: 'Freelance Gig', date: '2024-07-20', amount: 350.0 },
  ],
  spendingByCategory: [
    { category: 'Rent', amount: 1100.0 },
    { category: 'Groceries', amount: 75.43 },
    { category: 'Subscriptions', amount: 10.99 },
    { category: 'Other', amount: 63.58 },
  ],
};
