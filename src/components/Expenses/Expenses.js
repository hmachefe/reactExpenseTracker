import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredDate, setFilteredDate] = React.useState('2021');

    const onDateFilter = (selectedDate) => {
        setFilteredDate(selectedDate);
    }

    const filteredExpenses = () => {
        return props.expenses.filter(expense => {
            return expense.date.getFullYear().toString() === filteredDate.toString()
        })
    }

    let expenses = 'No expenses for this year' ;
    if (filteredExpenses().length > 0) {
        expenses = filteredExpenses().map((expense, index) => {
            return(<ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />);
        })        
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedDate={filteredDate} onDateChange={onDateFilter}/>
                {expenses}
            </Card>
        </div>


    )
}
export default Expenses;
