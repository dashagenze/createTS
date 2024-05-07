import {useEffect, useState} from "react";
import '../App.css'
import Button from "../ui/Button";
import {Link, useNavigate, useParams} from "react-router-dom";
import { IItem } from '../types/IItem.ts'

const LINKTOCART = 'http://localhost:3000/CartItems/'
const LINK = 'http://localhost:3000/ItemsData/'

const ItemPage = () => {

    const [item, setItem] = useState<IItem>({id: 'item', price: 0, img: '', amount: 0, isInCart: false, title: '', description: ''});
    const [amount, setAmount] = useState(0)
    let [itemId, setItemId] = useState('')
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        setItemId(params.id || '');
        try {
            if(!itemId) return
            fetch(LINK + itemId)
                .then(response => {
                    if (response.status === 404) navigate('/error/404')
                    return response.json();

                })
                .then(result => {
                    setItem(result)
                    setAmount(item.amount)
                    console.log(amount)
                })
        } catch (e) {navigate('/superError')}
    }, [itemId]);


    const addItemToCart = async () => {
        try {
            const response = await fetch(LINKTOCART+itemId)
            const data = await response.json();
            const test = {amount: data.amount};
                if (response.status === 200) {
                    test.amount = test.amount+1
                    await fetch(LINKTOCART+itemId, {
                        method: 'PATCH',
                        body: JSON.stringify(test),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                        .then(r => r.json())
                        .then(r => console.log(r))
                        .catch(e => console.log(e))
                }
                alert('добавлено!')

        } catch (e) {
            await fetch(LINKTOCART, {
                method: 'POST',
                body: JSON.stringify({
                    title: item.title,
                    price: item.price,
                    img: item.img,
                    id: item.id,
                    amount: 1,
                    isInCart: true
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            alert('добавлено!')
        }
    }

    return (
        <div className={'margin'}>
            <Link className={'btn margin'} to='/'>Вернуться на главную</Link>
            <div>
                <div>
                    <img src={`/assets/${item.img}`} className={'picture'}/>
                    <h1>{item.title}</h1>
                    <h1>{item.price}₽</h1>
                </div>
            </div>

            <Button press={() => addItemToCart()} purpose={'ДОБАВИТЬ В КОРЗИНУ'}/>
            <Button press={()=> navigate('/cart')} purpose={'ПЕРЕЙТИ К КОРЗИНЕ'}/>
        </div>
    )
}


export default ItemPage