import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({username: evt.target.value});
    }
    handleSubmit(evt) {
        alert(`you type ${this.state.username}`);
        this.setState({username: ""});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Form Demo</h1>
                    <input
                    type='text'
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    <button> Submit! </button>
                </form>
            </div>
        )
    }
}

export default Form;