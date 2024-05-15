import {Link} from 'react-router-dom';
import '../App.css'
// @ts-ignore
import programmer from '../assets/programmer.jpg';
// @ts-ignore
import cartImg from '../assets/shopping_cart.png'
// @ts-ignore
import profile from '../assets/profile.png'


import ShopList from "./ShopList";
import Welcome from "../ui/createh1.ts";
import Search from "../modules/Search.tsx";
import ItemsList from "../modules/ItemsList.tsx";
import  { useState } from 'react'
import { ThemeContext } from '../main.tsx'
import ContrastIcon from '@mui/icons-material/Contrast';

// const LINK = 'http://localhost:3000/ItemsData'

const Home = () => {

    const name = localStorage.getItem('name')
    const surname = localStorage.getItem('surname')
    const [currentTheme, setCurrentTheme] = useState<string>('light');

    const themeSwitch = (currtheme: string) => {
        if (currtheme === 'light') {
            setCurrentTheme('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            setCurrentTheme('light')
            localStorage.setItem('theme', 'light')
        }
    }

    const theme = localStorage.getItem('theme');


    return (
        <ThemeContext.Provider value={currentTheme}>
            <div className={'body-' + theme}>
                <div className={`margin`}>
                    <div>
                        <img src={profile} className={'profileIcon'} />
                        <Link to={'/profile'}>ЛИЧНЫЙ КАБИНЕТ </Link>

                        <button className={'btn-' + theme} onClick={() => themeSwitch(currentTheme)}>
                            <ContrastIcon />
                        </button>
                    </div>
                    <p>{name} {surname}</p>
                    <Welcome />

                    <ShopList />
                    <img src={programmer} className={'progPic'} />

                    <Search />

                    <h1>Товары:</h1>

                    <div className={`cartIcon-` + theme}>
                        <Link className={'hover'} to={'/cart'}>
                            <img src={cartImg} />
                            <p>Корзина</p>
                        </Link>
                    </div>

                    <ItemsList />

                </div>
                <div className={'footer-' + theme}>
                    <h4>made by <a href={'https://github.com/dashagenze'}>dasha</a> w💕</h4>
                </div>
            </div>
        </ThemeContext.Provider>
    )

}

export default Home