import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate = (props) => {
  console.log('EXP DATE PROPS, ', props)
    let item = props.date;
    console.log('ITEM: ', item)
    let month = item.toLocaleString('en-US', {month: 'long'},);
    let day = item.toLocaleString('en-US', {day: '2-digit'},);
    let year = item.getFullYear();
    
   
    
    return(
        <Card className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </Card>
    );
}

export default ExpenseDate;