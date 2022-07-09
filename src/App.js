import OneExpenseItem from "./components/Expenses/OneExpenseItem";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  
  const expenses = [
    {
      id: "e1",
      title: 'Car Insurance',
      amount: 294.26,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e2",
      title: 'Car Thingies',
      amount: 594.61,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e3',
      title: 'Petrol',
      amount: 794.26,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'Cars are expensive',
      amount: 333.63,
      date: new Date(2021, 2, 28)
    }
  ]

  return (
    <div>
      <NewExpense />
      <OneExpenseItem expenseItems={expenses}/>
    </div>
  );
}

export default App;
