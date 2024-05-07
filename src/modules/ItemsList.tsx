import '../App.css'

import { FC } from 'react'
import { Link } from 'react-router-dom'

import useFetch from '../hooks/useFetch'

const ITEMSDATA = 'http://localhost:3000/ItemsData/'

const ItemsList: FC = () => {
    const { itemsList, isLoading } = useFetch(ITEMSDATA)

    if (isLoading) {
        return <div>Загружаем товары...</div>
    }

    return (
        <ul>
            {Boolean(itemsList) &&
                itemsList.map((item) => {
                    return (
                        <div key={item.id}>
                            <li className="flexItem">
                                <img className="itemIcon" src={`/assets/${item.img}`} />
                                <Link className="hover" to={`/${item.id}`}>
                                    {item.title}
                                </Link>
                            </li>
                            <hr />
                        </div>
                    )
                })}
        </ul>
    )
}

export default ItemsList
