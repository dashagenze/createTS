import {Link} from "react-router-dom";
import '../App.css';
import useFetch from "../hooks/useFetch";

const ITEMSDATA = 'http://localhost:3000/ItemsData/';

const ItemsList = () => {

    let {itemsList, isLoading} = useFetch(ITEMSDATA)

    if (isLoading) {
        return <div>Загружаем товары...</div>;
    }

    return (
        <ul>
            {itemsList &&
                itemsList.map((item) => {

                return (
                    <div key={item.id}>
                        <li className={'flexItem'}>
                            <img src={`/assets/${item.img}`} className={'itemIcon'}/>
                            <Link className={'hover'} to={'/'+item.id}>{item.title}</Link>
                        </li>
                        <hr/>
                    </div>
                )
            })}
        </ul>
    )
}

export default ItemsList