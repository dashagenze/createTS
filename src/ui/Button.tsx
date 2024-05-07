import '../App.css';
import React from 'react'

interface Props {
    style?: React.CSSProperties;
    press: () => any | undefined;
    purpose: string
}

const Button = (props: Props) => {

    return (
        <button className={'btn'} style={props.style} onClick={props.press}>{props.purpose}</button>
    )

}

export default Button