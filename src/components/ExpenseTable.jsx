import React from 'react';

const ExpenseTable = ({ expenses }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amounts</th>
          <th>Categories</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
