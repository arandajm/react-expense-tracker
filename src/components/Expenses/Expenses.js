import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";

import styles from "./Expenses.module.css";

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
    <Card className={styles.expenses}>
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
