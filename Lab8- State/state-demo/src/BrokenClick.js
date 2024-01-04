import React, { Component } from "react";

class BrokenClick extends Component {
    constructor(props) {
        super(props)
        this.state = { clicked: false };
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick(e) {
        this.setState({clicked: true});
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked!!' : 'Not Clicked!!'}</h1>
                <button onClick={this.handlerClick}>Click Me</button>
            </div>
        )
    }
}

export default BrokenClick;