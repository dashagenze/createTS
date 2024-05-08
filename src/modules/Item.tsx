import '../App.css'

interface Props {
    src: string,
    name: string,
    price: number,
    amount?: number
}

const Item = (props: Props) => {
    return (
        <div className="">
            <img src={props.src} className={'itemIcon'} />
            <h3>{props.name}</h3>
            <h3 style={{ fontStyle: 'italic' }}>{props.price}₽</h3>
        </div>
    )
}

export default Item