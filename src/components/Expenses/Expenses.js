import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const [filteredDate, setFilteredDate] = React.useState('2021');

    const onDateFilter = (selectedDate) => {
        console.log('in Expenses.js     selectedDate == ', selectedDate);
        setFilteredDate(selectedDate);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedDate={filteredDate} onDateChange={onDateFilter}/>
                {
                    props.expenses.filter(expense => {
                        console.log('expense.date.getFullYear() == ', expense.date.getFullYear().toString());
                        console.log('filteredDate == ', filteredDate.toString());
                        return expense.date.getFullYear().toString() === filteredDate.toString()
                    }).map((expense, index) => {
                        return(<ExpenseItem key={index} title={expense.title} amount={expense.amount} date={expense.date} />);
                    })
                }
            </Card>
        </div>


    )
}
export default Expenses;
