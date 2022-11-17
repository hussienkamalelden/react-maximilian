import "./style.scss"
import "react-datepicker/dist/react-datepicker.css";

const FormControl = (props) => {

    const formatDate = () => {
        if (props.date) {
            const day = props.date.toLocaleDateString('en-GB', { day: 'numeric' });
            const month = props.date.toLocaleDateString('en-GB', { month: 'numeric' });
            const year = props.date.toLocaleDateString('en-GB', { year: 'numeric' });
            return `${year}-${month}-${day}`;
        } else {
            return "";
        }
    }

    return (
        <form onSubmit={props.submitBtn}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={props.title} onChange={e => props.setTitle(e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.1" step="0.1" value={props.amount} onChange={e => props.setAmount(e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={formatDate()} onChange={e => props.setDate(new Date(e.target.value))} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default FormControl;