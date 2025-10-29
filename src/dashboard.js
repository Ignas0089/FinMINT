import { mockData } from './mockData.js';

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function createCard({ title, description, value, icon, modifier }) {
  const card = document.createElement('article');
  card.className = `card ${modifier ?? ''}`.trim();

  const header = document.createElement('div');
  header.className = 'card__header';

  const textGroup = document.createElement('div');
  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card__title';
  cardTitle.textContent = title;

  const cardDescription = document.createElement('p');
  cardDescription.className = 'card__description';
  cardDescription.textContent = description;

  textGroup.append(cardTitle, cardDescription);

  const badge = document.createElement('div');
  badge.className = 'card__badge';
  badge.setAttribute('aria-hidden', 'true');
  badge.textContent = icon;

  header.append(textGroup, badge);

  const amount = document.createElement('p');
  amount.className = 'card__value';
  amount.textContent = value;

  card.append(header, amount);
  return card;
}

function renderSummaryCards(container, data) {
  const cards = [
    {
      title: 'Total Balance',
      description: 'Available across all accounts',
      value: formatCurrency(data.totalBalance),
      icon: '💼',
      modifier: 'card--summary',
    },
    {
      title: 'Income',
      description: 'Month to date',
      value: formatCurrency(data.income),
      icon: '📈',
      modifier: 'card--income',
    },
    {
      title: 'Expenses',
      description: 'Tracked spending',
      value: formatCurrency(data.expenses),
      icon: '📉',
      modifier: 'card--expense',
    },
  ];

  cards.forEach((cardConfig) => {
    container.append(createCard(cardConfig));
  });
}

function renderTransactions(container, transactions) {
  const panel = document.createElement('section');
  panel.className = 'panel';

  const heading = document.createElement('h3');
  heading.textContent = 'Recent Transactions';
  panel.appendChild(heading);

  const list = document.createElement('ul');
  list.className = 'transactions';

  transactions.forEach((transaction) => {
    const item = document.createElement('li');
    item.className = 'transaction';

    const details = document.createElement('div');
    details.className = 'transaction__details';

    const name = document.createElement('span');
    name.className = 'transaction__name';
    name.textContent = transaction.name;

    const date = document.createElement('span');
    date.className = 'transaction__date';
    date.textContent = new Date(transaction.date).toLocaleDateString();

    details.append(name, date);

    const amount = document.createElement('span');
    amount.className = 'transaction__amount';
    const formattedAmount = formatCurrency(Math.abs(transaction.amount));
    const isPositive = transaction.amount > 0;
    amount.classList.add(
      isPositive ? 'transaction__amount--positive' : 'transaction__amount--negative',
    );
    amount.textContent = `${isPositive ? '+' : '-'}${formattedAmount}`;

    item.append(details, amount);
    list.appendChild(item);
  });

  panel.appendChild(list);
  container.appendChild(panel);
}

function renderCategories(container, categories) {
  const panel = document.createElement('section');
  panel.className = 'panel';

  const heading = document.createElement('h3');
  heading.textContent = 'Spending by Category';
  panel.appendChild(heading);

  const list = document.createElement('ul');
  list.className = 'categories';

  categories.forEach((category) => {
    const item = document.createElement('li');
    item.className = 'category';

    const label = document.createElement('span');
    label.className = 'category__label';
    label.textContent = category.category;

    const value = document.createElement('span');
    value.className = 'category__value';
    value.textContent = formatCurrency(category.amount);

    item.append(label, value);
    list.appendChild(item);
  });

  panel.appendChild(list);
  container.appendChild(panel);
}

export function renderDashboard(root = document.body, data = mockData) {
  root.innerHTML = '';

  const heading = document.createElement('h2');
  heading.className = 'section-title';
  heading.textContent = 'Dashboard';
  root.appendChild(heading);

  const cardsGrid = document.createElement('section');
  cardsGrid.className = 'cards-grid';
  renderSummaryCards(cardsGrid, data);
  root.appendChild(cardsGrid);

  const dataGrid = document.createElement('section');
  dataGrid.className = 'data-grid';
  renderTransactions(dataGrid, data.recentTransactions);
  renderCategories(dataGrid, data.spendingByCategory);
  root.appendChild(dataGrid);

  return root;
}
