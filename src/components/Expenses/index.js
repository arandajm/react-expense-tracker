import React, { useState } from "react";
import Card from "../Card";
import ExpensesChart from "../ExpensesChart";
import ExpensesFilter from "../ExpensesFilter";
import ExpensesList from "../ExpensesList";

import "./styles.css";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  );

  const saveSelectedYearHandler = (selectedYear) => {
    console.log("selected year: ", selectedYear);
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSaveSelectedYear={saveSelectedYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
