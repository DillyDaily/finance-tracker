import './ExpensesList.css';
import ExpenseCard from './ExpenseCard';

const ExpensesList = (props) => {
    let expensesContent = <p>No expenses for year chosen.</p>

    if (props.filteredExpenses.length > 0) {
        expensesContent = props.filteredExpenses.map(i => 
            <ExpenseCard 
                key={i.id} 
                title={i.title} 
                price={i.amount} 
                date={i.date}
            />);
    };
    return (
        <div> {expensesContent} </div>
    );
}

export default ExpensesList;