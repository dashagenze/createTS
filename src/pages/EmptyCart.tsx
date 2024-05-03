import {Link} from "react-router-dom";
import '../App.css'
import ItemsList from "../modules/ItemsList";

const EmptyCart = () => {

    return (
        <div>
            <h1>Не найдено товаров!</h1>
            <Link className={'btn margin'} to='/'>Вернуться на главную</Link>
            <h3>Добавить товары:</h3>
            <ItemsList/>
        </div>
    )
}

export default EmptyCart