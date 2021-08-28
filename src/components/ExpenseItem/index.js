import React from "react";
import Card from "../Card";
import ExpenseDate from "../ExpenseDate";
import "./styles.css";

const ExpenseItem = ({ date, title, amount }) => {
  const clickHandler = () => {
    console.log("Click!!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
