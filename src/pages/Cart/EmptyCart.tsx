import {Link} from "react-router-dom";
import '../../App.css'
import ItemsList from "../../modules/ItemsList.tsx";

const EmptyCart = () => {
    const theme = localStorage.getItem('theme');

    return (
        <div className={'body-'+theme}>
            <h1>Не найдено товаров!</h1>
            <Link className={`btn-${theme} margin`} to='/'>Вернуться на главную</Link>
            <h3>Добавить товары:</h3>
            <ItemsList/>
        </div>
    )
}

export default EmptyCart