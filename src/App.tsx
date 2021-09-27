import React, {useState} from 'react';
import './App.css';
import {IncrementButton, ResetButton} from './Increment';


let start: number = 0
let finish: number = 5

function App() {

    const [count, setCount] = useState(start)

    function incrementCount() {
        setCount(previousCount => previousCount + 1)





    }

    function resetCount() {
        setCount(start)
    }

    return (
        <div>
            <h1>ДИСКЛЕЙМЕР:</h1>
            <h1>Ты смотришь черно-белое кино.</h1>
            <h1>И здесь ругаются матом!</h1>

            <IncrementButton
                incrementCount={incrementCount}
                count={count}
                resetCount={resetCount}
            />
            <ResetButton
                incrementCount={incrementCount}
                count={count}
                resetCount={resetCount}

            />
        </div>


    )

}


export default App;













