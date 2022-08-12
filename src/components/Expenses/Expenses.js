import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseCard from "./ExpenseCard";

function Expenses(props) {
    const expenses = props.expenses;
    
    const [filteredYear, setSelectedYear] = useState('2020');

    const displaySelectedDateHandler = (selectedYear) => {
       setSelectedYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No expenses for year chosen.</p>

    if (filteredExpenses.length > 0) {
        expensesContent = 
        filteredExpenses.map(i => 
            <ExpenseCard 
                key={i.id} 
                title={i.title} 
                price={i.amount} 
                date={i.date}
            />);
    };

    return (
        <div>
            <ExpensesFilter filtered={filteredYear} onSelectYear={displaySelectedDateHandler}/>
            {expensesContent}
        </div>
    );
  }

  export default Expenses;