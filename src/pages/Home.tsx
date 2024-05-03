import {Link} from 'react-router-dom';
import '../App.css'
// @ts-ignore
import programmer from '../assets/programmer.jpg';
// @ts-ignore
import cartImg from '../assets/shopping_cart.png'
// @ts-ignore
import profile from '../assets/profile.png'

import {useState} from "react";
import ShopList from "./ShopList";
import Welcome from "../ui/createh1.ts";
import Search from "../modules/Search.tsx";
import ItemsList from "../modules/ItemsList.tsx";

// const LINK = 'http://localhost:3000/ItemsData'

const Home = () => {

    const [user, setUser] = useState({})

    return (
        <div >
            <div className={'margin'}>
                <div>
                    <img src={profile} className={'profileIcon'}/>
                    <Link to={'/profile'}>ЛИЧНЫЙ КАБИНЕТ</Link>
                </div>

                <Welcome name={user.name}/>

                <ShopList/>
                <img src={programmer} className={'progPic'}/>

                <Search />

                <h1>Товары:</h1>
                <div className={'cartIcon'}>
                    <Link className={'hover'} to={'/cart'}>
                        <img src={cartImg}/>
                        <p>Корзина</p>
                    </Link>
                </div>

                <ItemsList/>

                <div className={'footer'}>
                    <h4>made by <a href={'https://github.com/dashagenze'}>dasha</a> w💕</h4>
                </div>
            </div>
        </div>
    )

}

export default Home