import {useState} from "react";
import '../App.css'
import TextInput from "../modules/TextInput";
import TasksList from "../modules/TasksList";

const ShopList = () => {

    const [item, setItem] = useState('')
    const [items, setItems] = useState<string[]>([])

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
        <div className={'shopList'}>
            <h1>Список покумпок</h1>
            <TasksList list={items}  remove={removeItem} />
            <TextInput item={item} setItem={setItem} addItem={addItem}/>
            {/*<Button onClick={() => pressList()} purpose={'Посмотреть список'}/>*/}
        </div>
    )
}

export default ShopList
// export default React.memo(ShopList);
