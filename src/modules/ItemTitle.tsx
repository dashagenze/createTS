import Button from "../ui/Button";

const ItemTitle = (props) => {


    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.price}</h1>

        </div>
    )

}

export default ItemTitle