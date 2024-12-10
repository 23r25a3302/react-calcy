import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    const [display, setDisplay] = useState("");

    // Clear the display
    const clearDisplay = () => setDisplay("");

    // Append numbers to the display
    const appendNumber = (value) => setDisplay(display + value);

    // Append a decimal point
    const appendDecimal = () => {
        if (!display.includes(".")) {
            setDisplay(display + ".");
        }
    };

    // Handle basic math operations
    const setOperator = (operator) => {
        if (display && !isNaN(display[display.length - 1])) {
            setDisplay(display + operator);
        }
    };

    // Calculate the result
    const calculate = () => {
        try {
            setDisplay(eval(display).toString()); // Use eval cautiously
        } catch {
            setDisplay("Error");
        }
    };

    // Delete the last character
    const deleteLast = () => setDisplay(display.slice(0, -1));

    // Calculate square of the current value
    const calculateSquare = () => {
        try {
            setDisplay((Math.pow(parseFloat(display), 2) || 0).toString());
        } catch {
            setDisplay("Error");
        }
    };

    // Calculate reciprocal of the current value
    const calculateReciprocal = () => {
        try {
            const reciprocal = 1 / parseFloat(display) || 0;
            setDisplay(reciprocal.toFixed(5)); 
        } catch {
            setDisplay("Error");
        }
    };

    // Calculate square root of the current value
    const calculateSquareRoot = () => {
        try {
            setDisplay((Math.sqrt(parseFloat(display)) || 0).toString());
        } catch {
            setDisplay("Error");
        }
    };

    // Toggle between positive and negative
    const toggleSign = () => {
        try {
            setDisplay((parseFloat(display) * -1).toString());
        } catch {
            setDisplay("Error");
        }
    };

    // Trigonometric functions
    const calculateSin = () => {
        try {
            setDisplay((Math.sin(parseFloat(display) * (Math.PI / 180))).toFixed(5));
        } catch {
            setDisplay("Error");
        }
    };

    const calculateCos = () => {
        try {
            setDisplay((Math.cos(parseFloat(display) * (Math.PI / 180))).toFixed(5));
        } catch {
            setDisplay("Error");
        }
    };

    const calculateTan = () => {
        try {
            setDisplay((Math.tan(parseFloat(display) * (Math.PI / 180))).toFixed(5));
        } catch {
            setDisplay("Error");
        }
    };

    const calculateCot = () => {
        try {
            const tanValue = Math.tan(parseFloat(display) * (Math.PI / 180));
            setDisplay((1 / tanValue).toFixed(5));
        } catch {
            setDisplay("Error");
        }
    };

    return (
        <div className="container">
            <div className="calculator">
                <h2>Scientific Calculator</h2>
                <div className="display">
                    <input type="text" value={display} readOnly />
                </div>
                <div>
                    <button onClick={clearDisplay} className="operator">AC</button>
                    <button onClick={deleteLast} className="operator">DE</button>
                    <button onClick={toggleSign} className="operator">+/-</button>
                    <button onClick={() => setOperator("/")} className="operator">/</button>
                    <button onClick={calculateSin} className="operator">sin</button>
                </div>
                <div>
                    <button onClick={() => appendNumber("7")}>7</button>
                    <button onClick={() => appendNumber("8")}>8</button>
                    <button onClick={() => appendNumber("9")}>9</button>
                    <button onClick={() => setOperator("*")} className="operator">*</button>
                    <button onClick={calculateCos} className="operator">cos</button>
                </div>
                <div>
                    <button onClick={() => appendNumber("4")}>4</button>
                    <button onClick={() => appendNumber("5")}>5</button>
                    <button onClick={() => appendNumber("6")}>6</button>
                    <button onClick={() => setOperator("-")} className="operator">-</button>
                    <button onClick={calculateTan} className="operator">tan</button>
                </div>
                <div>
                    <button onClick={() => appendNumber("1")}>1</button>
                    <button onClick={() => appendNumber("2")}>2</button>
                    <button onClick={() => appendNumber("3")}>3</button>
                    <button onClick={() => setOperator("+")} className="operator">+</button>
                    <button onClick={calculateCot} className="operator">cot</button>
                </div>
                <div>
                    <button onClick={appendDecimal}>.</button>
                    <button onClick={() => appendNumber("0")}>0</button>
                    <button onClick={calculateSquare} className="operator">x²</button>
                    <button onClick={calculateReciprocal} className="operator">1/x</button>
                    <button onClick={calculateSquareRoot} className="operator">√x</button>
                </div>
                <div>
                    <button onClick={calculate} className="operator equalTo">=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
