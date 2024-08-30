import '../../App.css'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Item from "../../modules/Item.tsx";
import Button from "../../ui/Button.tsx";
import { IItem } from '../../types/IItem.ts'
import {getItems} from "../../hooks/getItems.ts";

const LINKTOCART = 'http://localhost:3000/CartItems'


// const delay = (callback, timer) => {
//     return new Promise((resolve) => setTimeout(() => {
//         resolve(callback())
//     }, timer))
// }
//
// const result = await delay()



const Cart = () => {
    const [cartItems, setCartItems] = useState<IItem[]> ([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();
    const initialValue = 0;
    const theme = localStorage.getItem('theme');


    useEffect(() => {
        getItems(LINKTOCART)
        console.log(cartItems)

        // fetch(LINKTOCART)
        //     .then(response => response.json())
        //     .then(result => {
        //         setCartItems(result)
        //         if (!result.length) {
        //             navigate('/error/emptycart')
        //         }
        //     })
        //     .catch(e=> console.log(e))
    }, []);

    useEffect(() => {
        fetch(LINKTOCART)
            .then(response => response.json())
            .then(result => {
                console.log(result)

                if (!result.length) {
                    navigate('/error/emptycart')
                }

                setTotal(cartItems.reduce((totalPrice: number, currentItem: {price: number, amount: number}) => {
                    totalPrice += (currentItem.price * currentItem.amount)
                    return totalPrice
                }, initialValue))

            })
            .catch(e=> console.log(e))
    }, [cartItems]);



const removeFromCart = async (id: string) => {
    await fetch(LINKTOCART+'/'+id, {
        method: 'DELETE'
    })
        .then(r => r.json())
        .then(newItems => {

            console.log(newItems)
            fetch(LINKTOCART)
                .then(r => r.json())
                .then(r => setCartItems(r))
                .catch(e=> console.log(e))

        })
        .catch(e=> console.log(e))
}
    return (
        <div className={' body-' + theme}>
            <div className={'margin'}>
                <Link to='/' className={`btn-${theme} margin`}>Вернуться на главную</Link>

                <h1>Корзина:</h1>
                <ul>
                    {cartItems && cartItems.map((item) => {
                        if (item.isInCart) {
                            return (
                                <div key={item.id} className={''}>
                                    <Item
                                        name={item.title}
                                        price={item.price * item.amount}
                                        amount={item.amount}
                                        src={`/assets/${item.img}`} />
                                    <h2>
                                        x{item.amount}
                                        <Button style={{ width: '100px', height: '50px' }} purpose={'убрать'}
                                                press={() => {
                                                    removeFromCart(item.id)
                                                }} />
                                    </h2>

                                    <hr />
                                </div>
                            )
                        }
                    })}
                </ul>

                <div className={'flexItem'} style={{ width: '500px' }}>
                    <h3 style={{ display: 'block' }}>Итого: {total}₽</h3>
                    <Button purpose={'перейти к оплате'} press={() => alert(`с вас ${total}₽ оплатите улыбкой :)`)} />
                </div>
            </div>
            <div className={'footer-' + theme}>
                <h4>made by <a href={'https://github.com/dashagenze'}>dasha</a> w💕</h4>
            </div>

        </div>
    )
}

export default Cart