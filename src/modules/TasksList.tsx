import '../App.css'

interface Props {
    list: string[];
    remove: (entry: string)=> void
}

const TasksList = ( {list, remove}: Props ) => {

    return (
        <>
            {list?.length > 0 ? (
                <> {list.map((entry, index) => (
                    <div key={index}>
                        <input
                            className={'checked'}
                            type="checkbox"
                        />
                        <label>{entry}</label>
                        <button className={'listBtn'} onClick={()=> remove(entry)}>убрать</button>
                    </div>
                ))}

                </>

            ) : (
                <p>добавьте что-то в список покупок!</p>
            )}

        </>
    )
}


export default TasksList

