import OneExpenseItem from "./components/OneExpenseItem";

function App() {
  
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
      <h2>Let's get started!</h2>
      <p>this is also visible</p>
      <OneExpenseItem expenseItems={expenses}/>
    </div>
  );
}

export default App;
