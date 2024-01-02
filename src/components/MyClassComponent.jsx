import React, {Component} from "react";

export class MyClassComponent extends Component {
    constructor(props){
        super(props);

        this.state = {value : 0}
    }
    
     increment = () => {
        this.setState ({vlaue : this.state.value + 1})
    }
   
    

    render () {
        return <div>
            <p>Value : {this.state.value}</p>

            <button onClick={this.increment}>+</button>
        </div>

    }
}

