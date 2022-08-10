import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  
  const expenses = [
    {
      id: "e1",
      title: 'Car Insurance',
      amount: 294.26,
      date: new Date(2018, 4, 21)
    },
    {
      id: "e2",
      title: 'Car Thingies',
      amount: 594.61,
      date: new Date(2015, 6, 18)
    },
    {
      id: 'e3',
      title: 'Petrol',
      amount: 794.26,
      date: new Date(2011, 2, 31)
    },
    {
      id: 'e4',
      title: 'Cars are expensive',
      amount: 333.63,
      date: new Date(2009, 5, 26)
    }
  ]

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
