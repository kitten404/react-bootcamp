import React, { Component } from "react";

class ButtonRandomNum extends Component {
    constructor(props) {
        super(props)
        this.state = {randNum: 0};
    }
    randomNum = (e) => {
        var rand = Math.floor(Math.random() * 10) + 1;
        this.setState({randNum: rand});
    }
    render() {
        return (
            <div>
                <h1>the random number is: {this.state.randNum}</h1>
                <p>{this.state.randNum === 7 && 'YOU WIN'}</p>
                <button onClick={this.randomNum}>im here to be clicked</button>
            </div>
        )
    }
}
export default ButtonRandomNum;