import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [openAddExpense, setOpenAddExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log('expenseData',expenseData)
    props.onAddExpense(expenseData);
    setOpenAddExpense(false);
  };

  const openAddExpenseHandler = () => {
    setOpenAddExpense(true);
  };

  const onCancleExpenseDataHandler = () => {
    setOpenAddExpense(false);
  }

  return (
    <div className="new-expense">
      {!openAddExpense ? (
        <button onClick={openAddExpenseHandler}>New expense</button>
      ) : (
        <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        onCancleExpenseData={onCancleExpenseDataHandler}>
        </ExpenseForm>
      )}
    </div>
  );
};
export default NewExpense;
