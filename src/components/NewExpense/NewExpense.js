import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const onSaveDataHandler = (expenseData) => {

        const newExpenseData = {
            ...expenseData,
            id: 10 * Math.random()
        }

        props.onExpenseAdded(newExpenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveDataHandler}/>
        </div>
    );
}

export default NewExpense;