import ExpenseItem from "../../components/Expenses/ExpenseItem";
import Card from '../../components/Card/index';
import "./style.scss"
import { useState } from 'react';
import NewExpense from "../../components/Expenses/NewExpense";
import ExpensesFilter from "../../components/Expenses/ExpensesFilter";

const Basics = () => {

    const allExpenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expenses, setExpenses] = useState(allExpenses);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date());
    const [option, setOption] = useState("all");

    const submitBtn = (e) => {
        e.preventDefault();
        const newObj = { id: Math.random(), title, amount, date };
        setTitle("");
        setAmount("");
        setDate(new Date());
        setExpenses([newObj, ...expenses]);
    }

    return (
        <>
            <Card className="ExpenseItems">
                <NewExpense
                    title={title}
                    setTitle={setTitle}
                    amount={amount}
                    setAmount={setAmount}
                    date={date}
                    setDate={setDate}
                    submitBtn={submitBtn}
                />
                <ExpensesFilter setOption={setOption} />
                <ExpenseItem expenses={expenses} setExpenses={setExpenses} option={option} />
            </Card>
        </>
    );
}

export default Basics;