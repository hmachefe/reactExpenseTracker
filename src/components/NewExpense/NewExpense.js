import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import React from 'react';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = React.useState(false);

    const displayNewExpenseForm = () => {
        setIsEditing(true);
    }

    const onSaveDataHandler = (expenseData) => {
        const newExpenseData = {
            ...expenseData,
            id: 10 * Math.random()
        };
        console.log('props.onExpenseAdded(newExpenseData);');
        props.onExpenseAdded(newExpenseData);
        setIsEditing(false);
    }

    const onCancelDataHandler = () => {
        setIsEditing(false);
    }

    if (isEditing) {
        return (
            <div className='new-expense'>
                <ExpenseForm 
                    onSaveExpenseData={onSaveDataHandler}
                    onCancelExpenseData={onCancelDataHandler}
                />
            </div>
        );
    }

    // not editing
    return (
        <button className='new-expense alternative'
            onClick={displayNewExpenseForm}
        >
            Add New Expense
        </button>
    );

}

export default NewExpense;
