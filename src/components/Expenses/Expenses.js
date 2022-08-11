import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpenseCard from "./ExpenseCard";

function Expenses(props) {
    const expenses = props.expenses;
    
    const [filteredYear, setSelectedYear] = useState('2020');

    const displaySelectedDateHandler = (selectedYear) => {
       setSelectedYear(selectedYear);
       console.log('EXPS ', selectedYear);
       console.log('FILTERED ', filteredYear)
    }

    return (
        <div> 
            <ExpensesFilter filtered={filteredYear} onSelectYear={displaySelectedDateHandler}/>
            { expenses.map(i => <ExpenseCard key={i.id} title={i.title} price={i.amount} date={i.date}/>)
            }
        </div>
    );
  }

  export default Expenses;