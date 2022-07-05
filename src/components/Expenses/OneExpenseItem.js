import React, { useState } from 'react';
import './OneExpenseItem.css';
import './Expenses.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const OneExpenseItem = (props) => {
    
    let item = props.expenseItems;
    
    const [title, setTitle] = useState(item[0].title);

    const clickHandeler = () => {
        setTitle('Updated!');
        console.log('title ',title );
    }
    // console.log('PROOOOPS: ', props.expenseItems[0]);
    // console.log('ITEM, ', item);
    // console.log('date, ', date)
    
            // const expenseItemAmount = props.expenseItems.map(item => 
            // <div>{item.amount}</div>
    //         );       

    return (
        <Card className = 'expenses'>
            <Card className='expense-item'>
                <ExpenseDate date={item[0].date}/>
                <div className='expense-item__description'>     
                    <h2>{title}</h2>
                    <div className="expense-item__price">${item[0].amount}</div>
                </div>
                <button onClick={clickHandeler}>Change title</button>
            </Card>    
            <Card className='expense-item'>    
                <ExpenseDate date={item[1].date}/>
                <div className='expense-item__description'>     
                    <h2>{item[1].title}</h2>
                    <div className="expense-item__price">${item[1].amount}</div>
                </div>
                <button onClick={clickHandeler}>Change title</button>
            </Card>
            <Card className='expense-item'>    
                <ExpenseDate date={item[2].date}/>
                <div className='expense-item__description'>     
                    <h2>{item[2].title}</h2>
                    <div className="expense-item__price">${item[2].amount}</div>
                </div>
            </Card>
            <Card className='expense-item'>    
                <ExpenseDate date={item[3].date}/>
                <div className='expense-item__description'>     
                    <h2>{item[3].title}</h2>
                    <div className="expense-item__price">${item[3].amount}</div>
                </div>
            </Card>
        </Card>
    );
}

export default OneExpenseItem;