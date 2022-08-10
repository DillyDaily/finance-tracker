// import '../UI/Expenses.css';
import React, { useState } from 'react';
import OneExpenseItem from "./OneExpenseItem";

function Expenses(props) {
    // console.log(props.expenses, "PROOOOPS");
    const expenses = props.expenses;

    return (
        <div className='expenses'> 
        { expenses.map(i => <OneExpenseItem key={i.id} title={i.title} price={i.amount}/>)
        }
      </div>
    );
  }

  export default Expenses;