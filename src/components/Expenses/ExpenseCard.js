import React, { useState } from 'react';
import './ExpenseCard.css';
import './Expenses.css';
import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseCard = (props) => {
    let { title, price, date } = props

    let month = date.toLocaleString('en-US', {month: 'long'},);
    let day = date.toLocaleString('en-US', {day: '2-digit'},);
    let year = date.getFullYear();

    return (
        <li>
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
                </Card>    
            </Card>
        </li>
    );
}

export default ExpenseCard;