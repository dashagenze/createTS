import '../App.css';
const Button = (props) => {

    return (
        <button className={'btn'} style={props.style} onClick={props.press}>{props.purpose}</button>
    )

}

export default Button