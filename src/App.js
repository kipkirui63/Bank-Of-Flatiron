import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
  };

  const handleFilterTransactions = (searchTerm) => {
    const filteredTransactions = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };

  return (
    <div>
      <h1>Transaction Table</h1>
      <TransactionForm onSubmit={handleAddTransaction} />
      <label htmlFor="search">Search Transactions:</label>
      <input type="text" id="search" onChange={(e) => handleFilterTransactions(e.target.value)} placeholder="Enter a search term" />
      <TransactionTable transactions={transactions} />
    </div>
  );
};



export default App;
