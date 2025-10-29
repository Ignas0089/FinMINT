import { mockData } from './mockData.js';
import { formatCurrency, formatSignedCurrency, formatDate } from './formatters.js';

const createSummaryCardsMarkup = (data) => {
  const cards = [
    {
      title: 'Total Balance',
      description: 'Available across all accounts',
      value: formatCurrency(data.totalBalance),
      valueClass: 'card-value--primary',
      icon: '💼',
      highlight: true,
    },
    {
      title: 'Income',
      description: 'Month to date',
      value: formatCurrency(data.monthlyIncome),
      valueClass: 'card-value--income',
      icon: '📈',
    },
    {
      title: 'Expenses',
      description: 'Tracked spending',
      value: formatCurrency(data.monthlyExpenses),
      valueClass: 'card-value--expense',
      icon: '📉',
    },
  ];

  return cards
    .map(
      (card) => `
        <article class="card${card.highlight ? ' card--highlight' : ''}" data-testid="summary-card">
          <div class="card-header">
            <div>
              <h3 class="card-title">${card.title}</h3>
              <p class="card-description">${card.description}</p>
            </div>
            <div class="card-icon" aria-hidden="true">${card.icon}</div>
          </div>
          <div class="card-content">
            <p class="card-value ${card.valueClass}">${card.value}</p>
          </div>
        </article>
      `,
    )
    .join('');
};

const createTransactionsMarkup = (transactions) =>
  transactions
    .map(
      (transaction) => `
        <li class="transaction-item" data-testid="transaction-${transaction.id}">
          <div>
            <p class="transaction-name">${transaction.name}</p>
            <p class="transaction-date">${formatDate(transaction.date)}</p>
          </div>
          <p class="transaction-amount ${
            transaction.amount >= 0
              ? 'transaction-amount--positive'
              : 'transaction-amount--negative'
          }">${formatSignedCurrency(transaction.amount)}</p>
        </li>
      `,
    )
    .join('');

const createCategoriesMarkup = (categories) =>
  categories
    .map(
      (category) => `
        <li class="category-item">
          <p class="category-name">${category.category}</p>
          <p class="category-amount">${formatCurrency(category.amount)}</p>
        </li>
      `,
    )
    .join('');

const createDashboardMarkup = (data) => `
  <header class="app-header">
    <h1 class="app-title">FinGlow</h1>
  </header>
  <main class="app-main">
    <div class="dashboard">
      <section>
        <h2 class="section-title">Dashboard</h2>
        <div class="summary-grid">
          ${createSummaryCardsMarkup(data)}
        </div>
      </section>
      <section class="two-column">
        <article class="card">
          <div class="card-header">
            <h3 class="card-title">Recent Transactions</h3>
          </div>
          <div class="card-content">
            <ul class="transaction-list">
              ${createTransactionsMarkup(data.recentTransactions)}
            </ul>
          </div>
        </article>
        <article class="card">
          <div class="card-header">
            <h3 class="card-title">Spending by Category</h3>
          </div>
          <div class="card-content">
            <ul class="category-list">
              ${createCategoriesMarkup(data.spendingByCategory)}
            </ul>
          </div>
        </article>
      </section>
    </div>
  </main>
`;

export const renderDashboard = (container) => {
  if (!(container instanceof HTMLElement)) {
    throw new TypeError('A valid container element is required to render the dashboard.');
  }

  container.className = 'app';
  container.innerHTML = createDashboardMarkup(mockData);
};

export const getDashboardMarkup = () => createDashboardMarkup(mockData);
