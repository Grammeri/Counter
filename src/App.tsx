import React, {useState} from 'react';
import './App.css';
import IncrementOrDecrementButton from "./Increment";


function App() {

    const [count, setCount] = useState<number>(0)

    const maxValue = 5
    const minValue = -5

    function incrementCount() {
        if (count < maxValue) {
            setCount(previousCount => previousCount + 1)
        }
        return
        // else {
        //     decrementCount()
        // }
    }

    function decrementCount() {
        if (count > minValue) {
            setCount(previousCount => previousCount - 1)
        }
        return
        // else {
        //     return
        // }
    }

    function resetCount() {
        setCount(0)
    }

    return (
        <div>
            <IncrementOrDecrementButton
                incrementCount={incrementCount}
                count={count}
                resetCount={resetCount}
                decrementCount={decrementCount}
                maxValue={maxValue}
                minValue={minValue}
            />
        </div>
    )
}

export default App;













