import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const expenses = props.expenses;
    
    const [filteredYear, setSelectedYear] = useState('2020');

    const displaySelectedDateHandler = (selectedYear) => {
       setSelectedYear(selectedYear);
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div className = "expenses">
            <ExpensesFilter filtered={filteredYear} onSelectYear={displaySelectedDateHandler}/>
            <ExpensesList filteredExpenses={filteredExpenses} />
        </div>
    );
  };

  export default Expenses;