import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, subtract, multiply, divide} from "../actions/actions";
import './calculator.css'

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const result = useSelector((state) => state.result);
    const dispatch = useDispatch();

    return (
        <div className="calculator">
            <h1>Калькулятор</h1>
            <div className="row">
                <input
                    type="number"
                    value={num1} onChange={(e) =>
                    setNum1(Number(e.target.value))}
                    placeholder="Число 1"
                />
                <input
                    type="number"
                    value={num2} onChange={(e) =>
                    setNum2(Number(e.target.value))}
                    placeholder="Число 2"
                />
                <h2>= {result}</h2>
            </div>
            <div className="buttons">
                <button onClick={() => dispatch(add(num1, num2))}>+</button>
                <button onClick={() => dispatch(subtract(num1, num2))}>-</button>
                <button onClick={() => dispatch(multiply(num1, num2))}>*</button>
                <button onClick={() => dispatch(divide(num1, num2))}>/</button>
            </div>
        </div>
    )
}

export default Calculator;