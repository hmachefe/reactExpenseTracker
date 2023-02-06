import './NewExpenseForm.css';

function NewExpenseForm() {

    const onTitleChangeHandler = (event) => {
        console.log('onTitleChangeHandler   event.target.value == ', event.target.value)
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
                        <input type="number" min="0.01" step="0.01" />
                    </div>                    
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2023-12-01" />
                    </div>                                        
                </div>                
                <div className="new-expense__actions">
                    <button>Add Expense</button>
                </div>
            </form>
    );
}

export default NewExpenseForm;