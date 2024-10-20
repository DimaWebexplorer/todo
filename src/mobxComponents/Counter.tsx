import counter from '../store/counter';
import { observer } from 'mobx-react-lite';

const Counter = observer(() => {
    return (
        <div>
            <h2>{`Counter: ${counter.total}`}</h2>
            <button style={{ width: '20px', height: '20px' }} onClick={() => counter.increment()}>+</button>
            <button style={{ width: '20px', height: '20px' }} onClick={() => counter.decrement()}>-</button>
            <button onClick={() => counter.reset()}>Reset counter</button>
        </div>
    )
});

export default Counter;




