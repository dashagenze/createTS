import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../state/store.ts'
import { decrement,
    increment,
    incrementByAmount,
    incrementAsync
} from '../state/counter/counterSlice.ts'


const Counter = () => {
    const count = useSelector((state : RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();


    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(20))}>increment by 20</button>
            <button onClick={() => dispatch(incrementAsync(10))}>async incr by 10</button>
        </>
    )
}

export default Counter;