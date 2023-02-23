import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./Expenditure.css";
const Expenditure = (props) => {
  // const expenseDate = new Date(2021, 2, 24);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.6;
 const [title,settitle] =  useState(props.title)

const clickHandler=()=>{
  settitle('updated')
  console.log(props.title)
}
const deleteEmp =()=>{
  console.log(props.id)
}
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button
        onClick={clickHandler}
      >
        Change Title
      </button>
      <button
        onClick={deleteEmp}
      >
        delete
      </button>
    </div>
  );
};

export default Expenditure;
