import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  //multiple states in component
  const [enteredTitle, setEnteredTitle] = useState(''); 
  const [enteredAmount, setEnteredAmount] = useState(''); 
  const [enteredDate, setEnteredDate] = useState('');

  //1 state: 
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // BETTER Alternative: 
    // setUserInput((prevState) => {
        // return{...prevState, enteredTitle: event.target.value}; <- this is overriding enteredTitle
      // };
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.event);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitButtonHandler = (event) => {
    console.log('I clicked a thing')
  };

  return <form>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type ='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type ='number' min='0.01' step='0.1' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type ='date' min='2019-01-01' max='2022-12-31' onChange={DateChangeHandler} />
        </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit' onClick={submitButtonHandler}>Add Expense</button>
    </div>
  </form>  
};

export default ExpenseForm;