import {Link} from "react-router-dom";

const Error = () => {

    return (
        <div>
            <p>Такого товара нет :(</p>
            <Link to='/'>Вернуться на главную</Link>
        </div>
    )
}

export default Error