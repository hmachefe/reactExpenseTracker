import "./ExpenseItem.css";

function ExpenseItem() {
    const expensePrice = "294.68";
    const expenseDescription = "Car Insurance";
    const expenseDate = new Date(2021, 2, 28);
    return (
        <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseDescription}</h2>
            <div className="expense-item__price">{expensePrice}$</div>
        </div>
        </div>
    );
}

export default ExpenseItem;
