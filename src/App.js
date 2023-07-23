import React, { useState , useEffect} from 'react';
import TransactionTable from './components.js/TransactionTable';
import TransactionForm from './components.js/TransactionForm';
import SearchBar from './components.js/SearchBar';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the API here (replace 'API_URL' with the actual API endpoint)
    const API_URL = 'http://localhost:3000/transactions'; // Update with the correct URL
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
        setFilteredTransactions(data.transactions);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  };

  const searchTransactions = (searchTerm) => {
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <SearchBar onSearch={searchTransactions} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
