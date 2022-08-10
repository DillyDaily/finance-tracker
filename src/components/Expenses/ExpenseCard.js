import React, { useState } from 'react';
import './ExpenseCard.css';
import './Expenses.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseCard = (props) => {
    let { title, price, date } = props

    let month = date.toLocaleString('en-US', {month: 'long'},);
    let day = date.toLocaleString('en-US', {day: '2-digit'},);
    let year = date.getFullYear();

    const clickHandeler = () => {
        setTitle('Updated!');
        // console.log('title ',title );
    }

    // console.log('UNO props' , props);     

    return (
        
        <Card className = 'expenses'>
            <Card className='expense-item'>
                <Card className='expense-date'>
                    <div className='expense-date__month'>{month}</div>
                    <div className='expense-date__year'>{year}</div>
                    <div className='expense-date__day'>{day}</div>
                </Card>
                <div className='expense-item__description'>     
                    <h2>{title}</h2>
                    <div className="expense-item__price">${price}</div>
                </div>
                <button onClick={clickHandeler}>Change title</button>
            </Card>    
        </Card>
    );
}

export default ExpenseCard;