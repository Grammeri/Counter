import React from "react";


type PropsType = {
    incrementCount: () => void;
    count: number
    resetCount: () => void;
    decrementCount: () => void;
    maxValue: number;
    minValue: number;
}

function IncrementOrDecrementButton(props: PropsType) {

    const plusButton = () => {
        props.incrementCount()
    }
    const minusButton = () => {
        props.decrementCount()
    }
    const resetButton = () => {
        props.resetCount()
    }


    return (
        <div className={"container-1"}>
            <div className={props.count === props.maxValue || props.count === props.minValue ? "turn-number-red" : undefined}>{props.count}</div>
            {/*{props.count === props.maxValue || props.count === props.minValue Во второй части прописывать полностью props.minValue, а не только minValue  */}
            <div className={"support-buttons"}>
                <div className={"plus-minus-buttons"}>
                    <button disabled={props.count === props.maxValue} onClick={plusButton}>+</button>
                    <button disabled={props.count === props.minValue} onClick={minusButton}>-</button>
                </div>
                <div className={"reset-button"}>
                    <button disabled={props.count === 0} onClick={resetButton}>Reset</button>
                </div>
            </div>
        </div>
    )
}


export default IncrementOrDecrementButton;