import { useState } from 'react';
import './ExpenseForm.css';

 const ExpenseForm = (props) => {

    // const [userInput, setUserInput] = useState( {
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',                
    // });

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

//    const [enteredTitle, setEnteredTitle] = useState(''); 
    const onTitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
    };

 //   const [enteredAmount, setEnteredAmount] = useState(''); 
    const onAmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });        
    };

//    const [enteredDate, setEnteredDate] = useState(''); 
    const onDateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const enteredData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(enteredData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const onCancelHandler = (event) => {
        event.preventDefault();
        props.onCancelExpenseData();
    }

    return (
            <form onSubmit={onSubmitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" 
                        value={enteredTitle}
                        onChange={onTitleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" 
                        value={enteredAmount}
                        min="0.01" step="0.01" onChange={onAmountChangeHandler} />
                    </div>                    
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" 
                        value={enteredDate}
                        min="2019-01-01" max="2023-12-01" onChange={onDateChangeHandler} />
                    </div>                                        
                </div>                
                <div className="new-expense__actions">
                    <button>Add Expense</button>
                </div>
                <div className="new-expense__actions">
                    <button onClick={onCancelHandler}>Cancel</button>
                </div>                
            </form>
    );
}

export default ExpenseForm;
