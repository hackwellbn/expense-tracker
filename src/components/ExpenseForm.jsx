import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');


  

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({
         description, 
        amount,
         category
         });
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Description..." value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input placeholder="Amount..." type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input placeholder="Category...." value={category} onChange={(e) => setCategory(e.target.value)} required />
      <button type="submit">add an expense</button>
    </form>
  );
};

export default ExpenseForm;
