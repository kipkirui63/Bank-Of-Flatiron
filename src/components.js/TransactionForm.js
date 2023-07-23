import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [transactionData, setTransactionData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransactionData({ ...transactionData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any validation if needed
    onAddTransaction(transactionData);
    setTransactionData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <div className="transaction-form-container">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className='one'> 
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={transactionData.date}
            onChange={handleChange}
          />
        </div>
        <div className='one'>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={transactionData.description}
            onChange={handleChange}
          />
        </div>
        <div className='one'>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={transactionData.category}
            onChange={handleChange}
          />
        </div>
        <div className='one'>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={transactionData.amount}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
