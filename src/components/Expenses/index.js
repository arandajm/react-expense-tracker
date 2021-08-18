import React from "react";
import ExpenseItem from "../ExpenseItem";

import "./styles.css";

const Expenses = ({ items }) => {
  return (
    <div className="expense">
      {items.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Expenses;
