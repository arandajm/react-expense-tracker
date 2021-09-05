import ExpenseItem from "../ExpenseItem";
import "./styles.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses item found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem key={item.id} {...item} />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
