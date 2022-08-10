import React, { useState } from 'react';
import './OneExpenseItem.css';
import './Expenses.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const OneExpenseItem = (props) => {
    let { title, price, date } = props
    const clickHandeler = () => {
        setTitle('Updated!');
        console.log('title ',title );
    }
    
    console.log('UNO props' , props);     

    return (
        
        <Card className = 'expenses'>
            <Card className='expense-item'>
                {/* <ExpenseDate date={date}/> */}
                <div className='expense-item__description'>     
                    <h2>{title}</h2>
                    <div className="expense-item__price">${price}</div>
                </div>
                <button onClick={clickHandeler}>Change title</button>
            </Card>    
        </Card>
    );
}

export default OneExpenseItem;