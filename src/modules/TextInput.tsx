import '../App.css'

// interface Props {
//     item:
// }
function TextInput ( {item, setItem, addItem}: Props) {
    return (
        <div>
            <input
                type="text"
                name='item'
                value={item}
                placeholder={'macbook'}
                onChange={(e) => {
                    setItem(e.target.value)
                }}
            />
            <button className={'listBtn'} onClick={addItem}>добавить</button>

        </div>
    )
}

export default TextInput