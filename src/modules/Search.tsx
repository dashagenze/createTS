import {Link} from "react-router-dom";
import {useState} from "react";
import SearchInput from "./SearchInput";
import '../App.css'
import useFetch from "../hooks/useFetch";

const ITEMSDATA = 'http://localhost:3000/ItemsData'


const Search = () => {
    const [value, setValue] = useState('')
    let {itemsList, isLoading} = useFetch(ITEMSDATA)

    // example  http://localhost:3000/customer?name_like=rist

    if (isLoading) {
        return <div>Загружаем товары...</div>;
    }

    return (
        <div className={'searchField'}>
            <h2 >Найти товар:</h2>
            <SearchInput searchValue={value} setValue={setValue}/>

            <ul>
                {itemsList && itemsList.map((item) => {
                    if (item.title.includes(value) && value !== '') {
                    return (
                        <li key={item.id}>
                            <Link to={'/'+item.id}>{item.title}</Link>
                        </li>
                    )}
                })}
            </ul>

            {/*<button >find an item</button>*/}
        </div>
    )
}

export default Search