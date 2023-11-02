import React,{useState} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [expenses, setExpenses] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
    };

    setExpenses((prevExpenses) => [...prevExpenses, expenseData]);

    setEnteredTitle('');
    setEnteredAmount('');
  };

  const deleteExpenseHandler = (index) => {
    setExpenses((prevExpenses) => prevExpenses.filter((_, i) => i !== index));
  };

  const totalAmount = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Product Name: </label>
        <input type='text' value = {enteredTitle} onChange={(event) => setEnteredTitle(event.target.value)}></input>

        <label> Amount: </label>
        <input type='number' min="0.01" step="0.01" value = {enteredAmount} onChange={(event) => setEnteredAmount(event.target.value)}></input>

        <button type="submit">Add</button>
      </form>

      <div>
        <div>  <h1>Total amount (Rs): {totalAmount.toFixed(2)}</h1></div>
        <h2>Products</h2>
        <ul>
          {
            expenses.map((expense, index) => (
              <li key={index}>
                Product Name: {expense.title}, Amount: Rs: {expense.amount}
                <button onClick={() => deleteExpenseHandler(index)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
 
export default App; 