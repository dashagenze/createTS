import '../App.css';
import React from 'react'

interface Props {
    style?: React.CSSProperties;
    press: () => void | undefined | Promise<void>;
    purpose: string
}
const theme = localStorage.getItem('theme');

const Button = (props: Props) => {

    return (
        <button className={'btn-'+theme} style={props.style} onClick={props.press}>{props.purpose}</button>
    )

}

export default Button