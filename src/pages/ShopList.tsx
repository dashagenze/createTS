import {useState} from "react";
import '../App.css'
import TextInput from "../modules/TextInput";
import TasksList from "../modules/TasksList";

const ShopList = () => {

    const [item, setItem] = useState('')
    const [items, setItems] = useState([])

    const addItem = () => {
            if (item !== '') {
                setItems([...items, item])
            }
            setItem('')
    }

    const removeItem = (text) => {
        const newItems = items.filter((item) => {
            return item !== text
        })
        setItems(newItems)
    }

    const checked = (text) => {
        text.style.textDecoration = 'strikethrough'
    }

    return (
        <div className={'shopList'}>
            <h1>Список покумпок</h1>
            <TasksList list={items} onChecked={() => checked()} remove={removeItem} />
            <TextInput item={item} setItem={setItem} addItem={addItem}/>
            {/*<Button onClick={() => pressList()} purpose={'Посмотреть список'}/>*/}
        </div>
    )
}

export default ShopList
// export default React.memo(ShopList);
