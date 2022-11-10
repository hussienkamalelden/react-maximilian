import "./style.scss"

const ItemDate = (props) => {

    const day = props.date.toLocaleDateString('en-GB', { day: 'numeric' });
    const month = props.date.toLocaleDateString('en-GB', { month: 'long' });
    const year = props.date.toLocaleDateString('en-GB', { year: 'numeric' });

    return (
        <div className="expense-date">
            <div className="expense-date___month">{month}</div>
            <div className="expense-date___year">{year}</div>
            <div className="expense-date___day">{day}</div>
        </div>
    );
}

export default ItemDate;