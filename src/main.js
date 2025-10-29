import { renderDashboard } from './dashboard.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app');
  if (!root) {
    throw new Error('Failed to find root element with id "app".');
  }
  renderDashboard(root);
});
