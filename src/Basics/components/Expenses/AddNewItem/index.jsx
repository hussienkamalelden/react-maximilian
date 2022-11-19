import Card from "../../Card";

const AddNewItem = (props) => {

    return (
        <Card className="new-expense">
            <button onClick={() => props.setAddAvaliable(true)}>Add New Item</button>
        </Card>
    );
}

export default AddNewItem;