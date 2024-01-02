import React from "react";

export function FunctionalComponent () {

    const [state, setState] =React.useState({value : 0})

   const increment =() => {
        setState({...state, value : state.value +1})
        }

        const decrement = () => {
            setState({...state, value : state.value -2})
        }

        const multiply = () => {
            setState({...state, value : state.value * 2})
        }

        const divide = () => {
            setState({...state, value : state.value / 2})
        }
    


    return <div>
        <p>Value : {state.value}</p>
        <button onClick={increment}>+</button>
        <button on onClick={decrement}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
    </div>
}