import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <div>
      <h2>Search Transactions</h2>
      <input
        type="text"
        placeholder="Search by description..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
