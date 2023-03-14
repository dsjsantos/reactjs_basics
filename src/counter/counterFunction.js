import React, { useState } from "react";

import './counter.css';


const CounterFunction = props => {
    const [count, setCount] = useState(props.initial ? props.initial : 0);
    const { increase, decrease } = props.disableButton || {};

    const _handleCounterDecrease = () => {
        setCount(count-1);
    }

    const _handleCounterIncrease = () => {
        setCount(count+1);
    }

    return (
        <div className="counter-wrapper">
            <div className="counter-box">
                <span className="counter-value">{count}</span>
                <button 
                    className="counter-action counter-remove" disabled={decrease}
                    onClick={_handleCounterDecrease}>-</button>
                <button 
                    className="counter-action counter-add" disabled={increase}
                    onClick={_handleCounterIncrease}>+</button>
            </div>
        </div>
    )
}

export default CounterFunction;