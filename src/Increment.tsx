import React from "react";

type PropsType = {
    incrementCount: ()=>void;
    count:number
    resetCount: ()=>void;
}


export function IncrementButton (props: PropsType){
    return (
        <div>
        <div>
    <button>{props.count}</button>
        </div>
            <div>
    <button
        onClick={()=>{props.incrementCount()}}>+</button>

</div>

        </div>
    )
}

export function ResetButton (props: PropsType){
    return (
        <div>
            <button onClick={()=>{props.resetCount()}}

            >Reset</button>
        </div>
    )
}
