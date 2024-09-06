import React, { useState, useRef } from 'react'
import './App.css'

function StockAverage() {

    const inputFirstUnit = useRef(null);
    const inputFirstPrice = useRef(null);
    const inputSecondUnit = useRef(null);
    const inputSecondtPrice = useRef(null);

    const [average, setAverage] = useState(0)
    const [total, setTotal] = useState(0)

    const calcAvg = () => {
        const firstUnits = parseFloat(inputFirstUnit.current.value);
        console.log('type of firstUnits:', typeof (firstUnits))
        const firstPrice = inputFirstPrice.current.value;
        console.log('type of firstPrice :', typeof (firstPrice))
        const secondsUnits = parseFloat(inputSecondUnit.current.value);
        const secondPrice = inputSecondtPrice.current.value;

        const firstPurchaseTotal = firstUnits * firstPrice
        const secondPurchaseTotal = secondsUnits * secondPrice
        const totalUnits = firstUnits + secondsUnits
        const totalpurchase = firstPurchaseTotal + secondPurchaseTotal

        setAverage(() => totalpurchase / totalUnits);
        setTotal(totalpurchase)
    }

    const clearFields = () => {
        inputFirstUnit.current.value = null
        inputFirstPrice.current.value = null
        inputSecondUnit.current.value = null
        inputSecondtPrice.current.value = null
        setAverage(0)
        setTotal(0)
    }

    return (
        <div>

            <div className="header">
                <h1>Stock Market Average Calculator</h1>
            </div>
            <div className="container">

                <div className="purchase">
                    <h2>First Purchase</h2>
                    <label >Units:</label>
                    <input ref={inputFirstUnit} type="number"/>
                    <label >Price per Share:</label>
                    <input ref={inputFirstPrice} type="number" id="first-price" name="firstPrice" />
                </div>

                <div className="purchase">
                    <h2>Second Purchase</h2>
                    <label >Units:</label>
                    <input ref={inputSecondUnit} type="number" id="second-units" name="secondUnits" />
                    <label >Price per Share:</label>
                    <input ref={inputSecondtPrice} type="number" id="second-price" name="secondPrice" />
                </div>
            </div>

            <div className="buttons">
                <button type="button" onClick={clearFields} >Clear</button>
                <button type="button" onClick={calcAvg}>Calculate Average</button>
            </div>

            <>
                <label>Total invested amount : </label> <h3>{total}</h3><br />
                <label>Average : </label> <h3>{average}</h3>
            </>

        </div>
    )
}

export default StockAverage