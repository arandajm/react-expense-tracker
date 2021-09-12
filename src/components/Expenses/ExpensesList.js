import ExpenseItem from "../Expenses/ExpenseItem";
import styles from "./ExpensesList.module.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return (
      <h2 className={styles["expenses-list__fallback"]}>
        No expenses item found!
      </h2>
    );
  }
  return (
    <ul className={styles["expenses-list"]}>
      {items.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
