import React, { useEffect } from 'react'
import '../App.css'
// @ts-ignore
import hi from '../assets/obed.jpg'
import {Link} from "react-router-dom";
// @ts-ignore
import cartImg from '../assets/shopping_cart.png'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store.ts'
import {
    changeName,
    changeSurname
} from '../state/profile/profileSlice.ts'



// type SetFunc = (set: (e: string)=> void, e: React.ChangeEvent<HTMLInputElement>) => void;
type OnChangeFunction = () => void

function Profile() {

    // const [isVisible, setIsVisible] = useState<boolean>(true);
    const name = useSelector((state: RootState) => state.profile.name)
    const surname = useSelector((state: RootState) => state.profile.surname)
    const dispatch = useDispatch<AppDispatch>();
    const theme = localStorage.getItem('theme');
    


    const submit: OnChangeFunction = () => {
        dispatch(changeName(name));
        dispatch(changeSurname(surname));
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        const inputField  = document.getElementById('inputField');
        if (inputField) inputField.style.display = 'none';
        location.reload()
    }

    const edit: OnChangeFunction = () => {
        const inputField  = document.getElementById('inputField');
        if (inputField) inputField.style.display = 'block';

    }

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeName(e.target.value))
    }

    const onSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSurname(e.target.value))
    }


    useEffect(() => {
        console.log(localStorage.getItem('name'))
        console.log(localStorage.getItem('surname'))

    }, [name, surname])

        return (
            <div className={'body-'+theme}>
                <Link to='/' className={`btn-${theme} margin`}>Вернуться на главную</Link>
                <img className={'progPic'} src={hi}  />
                <div className={'profile'}>

                    <h2>Привет, {localStorage.getItem('name')} {localStorage.getItem('surname')}!</h2>

                    <div id={'inputField'} style={{display: 'none'}}>
                        <label>
                            введите Ваше имя
                            <input type={'text'} onChange={(e) => onNameChange(e)} />
                        </label>
                        <br />
                        <label>
                            введите Вашу фамилию
                            <input type={'text'} onChange={(e) => onSurnameChange(e)} />
                        </label>
                        <br />
                        <button onClick={() => submit()} className={'listBtn'}>подтвердить</button>
                    </div>

                    <button onClick={() => edit()} className={'listBtn'}>изменить</button>


                    <div className={'cartIcon-'+theme}>
                        <Link className={'hover'} to={'/profile'}>
                        <img src={cartImg} />
                        <p>перейти к корзине пользователя { name === 'Пользователь'? '' : name}</p>
                        </Link>
                    </div>
                </div>
            </div>
        )

}

export default Profile