import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import "./styles.css";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);

    // executed the parent function (pointer)
    onAddExpense(expenseData);
    setShowForm(false);
  };

  const toggleFormHandler = (showForm) => {
    setShowForm(showForm);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={() => toggleFormHandler(true)}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
