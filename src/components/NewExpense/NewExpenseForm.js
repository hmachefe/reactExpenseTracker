import { useState } from 'react';
import './NewExpenseForm.css';

function NewExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState(''); 
    const onTitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState(''); 
    const onAmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const [enteredDate, setEnteredDate] = useState(''); 
    const onDateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return (
            <form>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={onTitleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={onAmountChangeHandler} />
                    </div>                    
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2023-12-01" onChange={onDateChangeHandler} />
                    </div>                                        
                </div>                
                <div className="new-expense__actions">
                    <button>Add Expense</button>
                </div>
            </form>
    );
}

export default NewExpenseForm;