# Product Requirements Document: FinGlow Dashboard

## 1. Introduction/Overview

FinGlow is a financial tracking application designed for young professionals. This PRD outlines the core feature: a centralized dashboard that provides a clear, intuitive overview of the user's financial health. The goal is to empower users with a quick, digestible summary of their finances, enabling them to make informed decisions.

## 2. Goals

- To provide users with an at-a-glance summary of their key financial metrics.
- To create a visually appealing and user-friendly interface that encourages regular engagement.
- To establish a foundational dashboard to which more complex features can be added in the future.

## 3. User Stories

- As a user, I want to see my total balance across all connected accounts so that I can quickly understand my overall financial position.
- As a user, I want to view my recent income and expenses so that I can track my cash flow.
- As a user, I want to see a summary of my spending by category so that I can identify areas where I might be overspending.

## 4. Functional Requirements

1.  **Total Balance Card:** The dashboard must display a prominent card showing the user's total balance. This will be a mock value for now.
2.  **Income and Expense Cards:** The dashboard must feature separate cards for total income and total expenses for the current month. These will be mock values.
3.  **Recent Transactions List:** The dashboard must include a section that lists the 5 most recent transactions (a mix of income and expenses). Each transaction should show the name, date, and amount. This will be mock data.
4.  **Spending by Category:** The dashboard should display a simple visualization (e.g., a list or a bar chart) of spending broken down by category for the current month. This will be mock data.

## 5. Non-Goals (Out of Scope)

- Connecting to real bank accounts or financial institutions.
- User authentication or multi-user support.
- The ability to add, edit, or delete transactions.
- Historical data analysis or trend reporting.

## 6. Design Considerations

- The UI should be clean, modern, and adhere to the color scheme defined in `src/style.css`.
- The dashboard should be responsive and usable on both desktop and mobile devices.
- Components should be built using shadcn/ui library.

## 7. Technical Considerations

- The application is built with React, TypeScript, and Vite.
- Styling is done with Tailwind CSS.
- For the initial version, all data will be hard-coded (mocked) within the components.

## 8. Success Metrics

- A functional and visually appealing dashboard is rendered without errors.
- All specified components (cards, transaction list) are present and display mock data correctly.

## 9. Open Questions

- None at this stage.
