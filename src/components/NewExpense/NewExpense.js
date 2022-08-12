import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [hideForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowForm(false);
    };
    
    const hideFormHandler = () => {
        setShowForm(true);
    };

    const showFormHandler = (props) => {
        setShowForm(false);
    };

    return <div className='new-expense'>
        {!hideForm && <button onClick={hideFormHandler}>Add New Expense</button>}
        {hideForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={showFormHandler} />}
    </div>
};

export default NewExpense