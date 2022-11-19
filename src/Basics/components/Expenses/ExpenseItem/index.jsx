import Card from "../../Card";
import ItemDate from "../Date";
import "./style.scss"

const ExpenseItem = (props) => {

    const noData = <h3 style={{ color: "red" }}>No Data Found.</h3>
    let newExpenses = [];

    if (props.option === "all")
        newExpenses = [...props.expenses];
    else
        newExpenses = props.expenses.filter(ele => ele.date.getFullYear().toString() === props.option);

    const allItems = () => {
        return newExpenses.map(ele => {
            return <Card className="expense-item" key={ele.id}>
                <ItemDate date={ele.date} />
                <div className="expense-item__description">
                    <h2 className="">{ele.title}</h2>
                    <div className="expense-item__price">{ele.amount}</div>
                </div>
            </Card>
        })
    }

    return (
        <>
            {(newExpenses.length === 0) && noData}
            {allItems()}
        </>

    );
}

export default ExpenseItem;