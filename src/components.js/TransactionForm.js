import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, description, category, amount });
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} required />
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} required />
      <label htmlFor="category">Category:</label>
      <input type="text" id="category" value={category} onChange={e => setCategory(e.target.value)} required />
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
