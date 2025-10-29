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

- [x] 1.0 Set up Dashboard Component
  - [x] 1.1 Create a new file `src/components/Dashboard.tsx`.
  - [x] 1.2 Implement the basic structure of the `Dashboard` component, including a grid layout for the cards.
  - [x] 1.3 Import and render the `Dashboard` component in `src/App.tsx`.
- [x] 2.0 Create Mock Data
  - [x] 2.1 Create a new file `src/lib/mockData.ts`.
  - [x] 2.2 Add mock data for total balance, income, expenses, recent transactions, and spending by category.
- [x] 3.0 Implement Dashboard Cards
  - [x] 3.1 Create a reusable `Card` component in `src/components/ui/Card.tsx` using `shadcn/ui`.
  - [x] 3.2 Create a `TotalBalanceCard` component that displays the total balance from the mock data.
  - [x] 3.3 Create `IncomeCard` and `ExpenseCard` components that display the respective values from the mock data.
- [x] 4.0 Implement Recent Transactions List
  - [x] 4.1 Create a `RecentTransactions` component.
  - [x] 4.2 The component should display the 5 most recent transactions from the mock data.
- [x] 5.0 Implement Spending by Category
  - [x] 5.1 Create a `SpendingByCategory` component.
  - [x] 5.2 The component should display the spending breakdown from the mock data.
