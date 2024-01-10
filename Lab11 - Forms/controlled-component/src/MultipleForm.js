import React, { Component } from "react" 

class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", email: "", passoword: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }
    handleSubmit(evt) {
        alert(`you type ${this.state.username} ${this.state.email} ${this.state.passoword}`);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Form With Multiple Input Demo</h1>
                    <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    <input type='email' name='email' placeholder='email' value={this.state.email} onChange={this.handleChange}/>
                    <input type='password' name='password' placeholder='password' value={this.state.passoword} onChange={this.handleChange}/>
                    <button> Submit! </button>
                </form>
            </div>
        )
    }
}

export default MultipleForm;