import React from 'react';
import TransactionForm from './components/TransactionForm';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <header className="p-4 border-b">
        <h1 className="text-2xl font-semibold text-primary">FinGlow</h1>
      </header>
      <main className="p-4">
        <TransactionForm />
      </main>
    </div>
  );
};

export default App;
