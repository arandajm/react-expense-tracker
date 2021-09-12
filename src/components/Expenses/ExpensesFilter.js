import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = ({ onSaveSelectedYear, selected }) => {
  const dropdownChangeHandler = (ev) => {
    const { value } = ev.target;
    console.log("picked date:", value);
    // Lifting selected year up
    onSaveSelectedYear(value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
