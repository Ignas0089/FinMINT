## Relevant Files

- `src/App.tsx` - The main application component where the dashboard will be rendered.
- `src/components/Dashboard.tsx` - A new component for the main dashboard.
- `src/components/Dashboard.test.tsx` - Unit tests for the Dashboard component.
- `src/components/ui/Card.tsx` - A reusable Card component from shadcn/ui.
- `src/lib/mockData.ts` - A new file to store mock data for the dashboard.

### Notes

- Components should be created in the `src/components` directory.
- UI components will be sourced from `shadcn/ui`.

## Tasks

- [ ] 1.0 Set up Dashboard Component
  - [ ] 1.1 Create a new file `src/components/Dashboard.tsx`.
  - [ ] 1.2 Implement the basic structure of the `Dashboard` component, including a grid layout for the cards.
  - [ ] 1.3 Import and render the `Dashboard` component in `src/App.tsx`.
- [ ] 2.0 Create Mock Data
  - [ ] 2.1 Create a new file `src/lib/mockData.ts`.
  - [ ] 2.2 Add mock data for total balance, income, expenses, recent transactions, and spending by category.
- [ ] 3.0 Implement Dashboard Cards
  - [ ] 3.1 Create a reusable `Card` component in `src/components/ui/Card.tsx` using `shadcn/ui`.
  - [ ] 3.2 Create a `TotalBalanceCard` component that displays the total balance from the mock data.
  - [ ] 3.3 Create `IncomeCard` and `ExpenseCard` components that display the respective values from the mock data.
- [ ] 4.0 Implement Recent Transactions List
  - [ ] 4.1 Create a `RecentTransactions` component.
  - [ ] 4.2 The component should display the 5 most recent transactions from the mock data.
- [ ] 5.0 Implement Spending by Category
  - [ ] 5.1 Create a `SpendingByCategory` component.
  - [ ] 5.2 The component should display the spending breakdown from the mock data.
