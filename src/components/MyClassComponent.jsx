import React, {Component} from "react";

export class MyClassComponent extends Component {
    constructor(props){
        super(props);

        this.state = {value : 0}
    }
    
     increment = () => {
        this.setState ({value : this.state.value + 1})
    }

    decrement = () => {
        this.setState({value : this.state.value - 1})
    }

    multiply = () => {
        this.setState ({value : this.state.value * 2})
    }

    divide = () => {
        this.setState ({value : this.state.value / 2})
    }
   
    

    render () {
        return <div>
            <p>Value : {this.state.value}</p>

            <button onClick={this.increment}>+</button>
            <button on onClick={this.decrement}>-</button>
            <button onClick={this.multiply}>*</button>
            <button onClick={this.divide}>/</button>
        </div>

    }
}

