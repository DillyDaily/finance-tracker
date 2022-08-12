import './ExpensesList.css';
import ExpenseCard from './ExpenseCard';

const ExpensesList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found</h2>;
    } 
       return (
        <ul className="expenses-list">
            {props.filteredExpenses.map(i => 
            <ExpenseCard 
                key={i.id} 
                title={i.title} 
                price={i.amount} 
                date={i.date}
            />)}
        </ul>
    );   
};

export default ExpensesList;