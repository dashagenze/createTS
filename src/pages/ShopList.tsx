import {useState} from "react";
import '../App.css'
import TextInput from "../modules/TextInput";
import TasksList from "../modules/TasksList";

const ShopList = () => {

    const [item, setItem] = useState('')
    const [items, setItems] = useState<string[]>([])
    const theme = localStorage.getItem('theme');

    const addItem = () => {
            if (item !== '') {
                setItems([...items, item])
            }
            setItem('')
    }

    const removeItem = (text: string) => {
        const newItems = items.filter((item) => {
            return item !== text
        })
        setItems(newItems)
    }


    return (
        <div className={'shopList-'+theme}>
            <h1>Список покумпок</h1>
            <TasksList list={items}  remove={removeItem} />
            <TextInput item={item} setItem={setItem} addItem={addItem}/>
        </div>
    )
}

export default ShopList