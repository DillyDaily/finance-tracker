// import '../UI/Expenses.css';
import React, { useState } from 'react';
import ExpenseCard from "./ExpenseCard";
import ExpenseDate from './ExpenseDate';

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <div className='expenses'> 
        { expenses.map(i => <ExpenseCard key={i.id} title={i.title} price={i.amount} date={i.date}/>)
        }
      </div>
    );
  }

  export default Expenses;