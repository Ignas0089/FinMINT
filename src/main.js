import './style.css';
import { renderDashboard } from './modules/dashboard.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found.');
  }

  renderDashboard(root);
});
