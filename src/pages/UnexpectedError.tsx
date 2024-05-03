import {Link} from "react-router-dom";

const UnexpectedError = () => {

    return (
        <div>
            <p>Случилось что-то невообразимое...дорогой дневник...</p>
            <Link to='/'>Вернуться в безопасность...</Link>
        </div>
    )
}

export default UnexpectedError