import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";

import "./styles.css";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const saveSelectedYearHandler = (selectedYear) => {
    console.log("selected year: ", selectedYear);
    setSelectedYear(selectedYear);
  };
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSaveSelectedYear={saveSelectedYearHandler}
      />
      {items.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Expenses;
