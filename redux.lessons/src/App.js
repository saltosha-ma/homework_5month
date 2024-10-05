import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Счётчик: {count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
            <button onClick={() => dispatch({ type: 'INCREMENT_BY_10' })}>+10</button>
            <button onClick={() => dispatch({ type: 'DECREMENT_BY_10' })}>-10</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Сброс</button>
        </div>
    );
};

export default App;

