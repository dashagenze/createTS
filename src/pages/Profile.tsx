import React, {useCallback, useEffect, useMemo, useState} from "react";
import '../App.css'
import hi from '../assets/hi.png'
import {Link} from "react-router-dom";
import cartImg from "../assets/shopping_cart.png";


function Profile() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [counter, setCounter] = useState(null)
    const [user, setUser] = useState(null)

    const createUser = useCallback((name, surname) => {
        const user = {name, surname};
        console.log(user)
        return user
    }, [name, surname])

    const genUser = useMemo(()=> createUser(name, surname), [name, surname])

    const submit = () => {
        if(name && surname) {
            setUser(genUser)
            console.log(user);
        } else if (!name && !surname) { alert('введите данные')}
    }

    const onNameChange = (set, e) => {
        set(e.target.value)
    }

    useEffect(() => {
        console.log(name)
        console.log(surname)
    }, [name, surname]);

    if (!user) {
        return (
            <div>
                <img className={'progPic'} src={hi}/>
                <div className={'profile'}>

                    <label>
                    введите Ваше имя
                    <input type={"text"} onChange={(e) => onNameChange(setName, e)}/>
                    </label>
                    <br/>

                    <label>
                    введите Вашу фамилию
                    <input type={"text"} onChange={(e) => onNameChange(setSurname, e)}/>
                    </label>

                    <br/>
                    <button onClick={() => submit(name, surname)} className={'listBtn'}>изменить</button>

                </div>
            </div>
        )
    } else if (user) {
        return (
            <div className={'profile'}>
                <img className={'progPic'} src={hi}/>
                Привет, {name} {surname}!
                {/*<button onClick={() => setCounter(counter + 1)}>вы нажали {counter} раз</button>*/}
                <br/>
                <button onClick={()=> alert('напишите разработчику, чтобы добавить взаимодействие с сервером!')}>Изменить имя</button>

                <div className={'cartIcon'}>
                    <Link className={'hover'} to={'/cart'}>
                        <img src={cartImg}/>
                        <p>перейти к корзине пользователя {name}</p>
                    </Link>
                </div>
            </div>
        )
    }


}

export default Profile