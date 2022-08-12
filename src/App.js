import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: 'Car Insurance',
    amount: 294.26,
    date: new Date(2022, 4, 21)
  },
  {
    id: "e2",
    title: 'Car Thingies',
    amount: 594.61,
    date: new Date(2021, 6, 18)
  },
  {
    id: 'e3',
    title: 'Petrol',
    amount: 794.26,
    date: new Date(2022, 2, 31)
  },
  {
    id: 'e4',
    title: 'Cars are expensive',
    amount: 333.63,
    date: new Date(2019, 5, 26)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
