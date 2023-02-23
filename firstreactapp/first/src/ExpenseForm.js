import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
const [enteredtitle,setenteredtitle]=useState('')
const [enteredamount,setenteredAmount]=useState('')
const [entereddate,setenteredDate]=useState('')
// const [userINput ,setUserInput] =useState({
//     enteredtitle:'',
//     enteredamount:'',
//     entereddate:''
// })
const TitleChangeHandler=(e)=>{
    setenteredtitle(
       
         e.target.value
    )
}
const AmountChangeHandler=(e)=>{
    setenteredAmount(   
        e.target.value
    )
}
const DateChangeHandler=(e)=>{
    setenteredDate(
      
         e.target.value
)
}
const SubmitHandler=(e)=>{
    e.preventDefault()

const EpenseData = {
    title : enteredtitle,
    amount: enteredamount,
    date: new Date(entereddate)
}
console.log(EpenseData)
setenteredtitle('')
setenteredDate('')
setenteredAmount('')
}
  return (
    <form onSubmit={SubmitHandler}>
      <div className=".new-expense__controls">
        <div className=".new-expense__control">
          <label>Title</label>
          <input type="text" 
          value={enteredtitle}
            onChange={TitleChangeHandler} />
        </div>
        <div className=".new-expense__control">
          <label>amount</label>
          <input type="number" value={enteredamount} min="0.01" step="0.01" onChange={AmountChangeHandler} />
        </div>
        <div className=".new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" value={entereddate} max="2023-02-25" onChange={DateChangeHandler} />
        </div>
      </div>
      <div className=".new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
