import Card from "../../Card";
import ItemDate from "../Date";
import "./style.scss"

const ExpenseItem = (props) => {

    return (
        <>
            {
                props.expenses.map(ele => {
                    if (props.option === "all") {
                        return (<Card className="expense-item" key={ele.id}>
                            <ItemDate date={ele.date} />
                            <div className="expense-item__description">
                                <h2 className="">{ele.title}</h2>
                                <div className="expense-item__price">{ele.amount}</div>
                            </div>
                        </Card>)
                    } else {
                        return ele.date.getFullYear().toString() === props.option ? <Card className="expense-item" key={ele.id}>
                            <ItemDate date={ele.date} />
                            <div className="expense-item__description">
                                <h2 className="">{ele.title}</h2>
                                <div className="expense-item__price">{ele.amount}</div>
                            </div>
                        </Card> : "";
                    }
                })
            }
        </>

    );
}

export default ExpenseItem;