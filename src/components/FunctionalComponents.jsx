import React from "react";

export function FunctionalComponent (props) {

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
        <h1>Functional Component</h1>

        <h2>Received Props :</h2>
        <p>Props : {props.myProp}</p>
        <p>Value : {state.value}</p>
        <button onClick={increment}>+</button>
        <button on onClick={decrement}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
    </div>
}