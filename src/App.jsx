import React, { useState, useEffect } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css'
function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const baseURL = 'http://localhost:3001'

  useEffect(() => {
    fetch(baseURL).then((res) => res.json()).then(setExpenses)
  }, [])




  const handleAddExpense = (expense) => {
    fetch(baseURL, {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(expense)

    }).then((res) => res.json()).then((newExpense) => setExpenses([...expenses, newExpense]));
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
