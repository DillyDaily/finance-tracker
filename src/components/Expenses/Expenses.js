import React from 'react';
import ExpenseCard from "./ExpenseCard";

function Expenses(props) {
    const expenses = props.expenses;

    return (
        <div> 
        { expenses.map(i => <ExpenseCard key={i.id} title={i.title} price={i.amount} date={i.date}/>)
        }
      </div>
    );
  }

  export default Expenses;