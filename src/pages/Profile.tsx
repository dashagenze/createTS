import React, { useCallback, useEffect, useMemo, useState } from 'react'
import '../App.css'
// @ts-ignore
import hi from '../assets/hi.png'
import {Link} from "react-router-dom";
// @ts-ignore
import cartImg from '../assets/shopping_cart.png'

type Profile = (name: string, surname: string) => { };
type SetFunc = (set: (e: string)=> void, e: React.ChangeEvent<HTMLInputElement>) => void;
type SubmitFunc = () => void

function Profile() {

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState('');
    // const [counter, setCounter] = useState(null)
    const [user, setUser] = useState({  })

    const createUser: Profile = useCallback((name, surname) => {
        const user = {name, surname};
        console.log(user)
        return user
    }, [name, surname])

    const genUser = useMemo(()=> createUser(name, surname), [name, surname])

    const submit: SubmitFunc = () => {
        if(name && surname) {
            setUser(genUser)
            console.log(user);
        } else if (!name && !surname) { alert('введите данные')}
    }

    const onNameChange: SetFunc = (set, e) => {
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
                    <button onClick={() => submit()} className={'listBtn'}>изменить</button>

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