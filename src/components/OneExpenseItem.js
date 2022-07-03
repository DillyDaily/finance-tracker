import './OneExpenseItem.css';
import './Expenses.css';
import ExpenseDate from './ExpenseDate';

function OneExpenseItem(props) {
    
    let item = props.expenseItems;
    // console.log('PROOOOPS: ', props.expenseItems[0]);
    // console.log('ITEM, ', item);
    // console.log('date, ', date)
    
            // const expenseItemAmount = props.expenseItems.map(item => 
            // <div>{item.amount}</div>
    //         );       

    return (
        
        <div className = 'expenses'>
            <div className='expense-item'>
                <ExpenseDate date={item[0].date}/>
                <div className='expense-item__description'>     
                    <h2>{item[0].title}</h2>
                    <div className="expense-item__price">${item[0].amount}</div>
                </div>
            </div>    
                <div className='expense-item'>    
                <ExpenseDate date={item[1].date}/>
                <div className='expense-item__description'>     
                    <h2>{item[1].title}</h2>
                    <div className="expense-item__price">${item[1].amount}</div>
                </div>
            </div>
                <div className='expense-item'>    
                <ExpenseDate date={item[2].date}/>
                <div className='expense-item__description'>     
                    <h2>{item[2].title}</h2>
                    <div className="expense-item__price">${item[2].amount}</div>
                </div>
            </div>
                <div className='expense-item'>    
                <ExpenseDate date={item[3].date}/>
                <div className='expense-item__description'>     
                    <h2>{item[3].title}</h2>
                    <div className="expense-item__price">${item[3].amount}</div>
                </div>
            </div>
        </div>
    );
}

export default OneExpenseItem;
