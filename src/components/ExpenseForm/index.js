import React, { useState } from "react";
import "./styles.css";

const namespace = "new-expense";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (ev) => {
    console.log("title changed!");
    console.log(ev.target.value);
    setEnteredTitle(ev.target.value);
  };
  const amountChangeHandler = (ev) => {
    console.log("amount changed!");
    console.log(ev.target.value);
    setEnteredAmount(ev.target.value);
  };
  const dateChangeHandler = (ev) => {
    console.log("date changed!");
    console.log(ev.target.value);
    setEnteredDate(ev.target.value);
  };

  const clearInputs = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const submitHandler = (ev) => {
    ev.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    console.log("clicked button");
    console.log("entered title: ", expenseData);

    // executed the parent function (pointer)
    onSaveExpenseData(expenseData);

    clearInputs();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`${namespace}__controls`}>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={`${namespace}__control`}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={`${namespace}__control`}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={`${namespace}__actions`}>
        <button type="button" onClick={() => onCancel(false)}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
