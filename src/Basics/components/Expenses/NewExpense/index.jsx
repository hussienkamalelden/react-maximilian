import Card from "../../Card";
import FormControl from "../FormControl"
import "./style.scss"

const NewExpense = (props) => {
    return (
        <Card className="new-expense">
            <FormControl
                title={props.title}
                setTitle={props.setTitle}
                amount={props.amount}
                setAmount={props.setAmount}
                date={props.date}
                setDate={props.setDate}
                submitBtn={props.submitBtn} />
        </Card>
    );
}

export default NewExpense;