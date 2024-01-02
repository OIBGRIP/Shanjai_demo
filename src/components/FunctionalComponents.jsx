import React from "react";

export function FunctionalComponent () {

    const [state, setState] =React.useState({value : 0})

    const increment =() => {
        setState({...state, value : this.state.value +1})
        }
    


    return <div>
        <p>Value : {this.state.value}</p>
        <button onClick={increment}>+</button>
    </div>
}