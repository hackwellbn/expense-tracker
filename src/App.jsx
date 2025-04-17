import React, { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css'
function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
