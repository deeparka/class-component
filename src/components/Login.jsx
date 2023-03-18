import React, { Component } from 'react'
import Dashboard from './Dashboard';

export class Login extends Component {

    constructor() {
        super();
        this.state = { view: "login", cname: "" };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ cname: e.target.value });
    }

    handleClick() {
        this.setState({ view: "logout" });
    }

    render() {
            if (this.state.view === "login") {
                return (
                    <div>
                        <h1>Login</h1>
                        <input type="text" name="" id="" onChange={this.handleChange} />
            
                        <button onClick={this.handleClick}>Login</button>
                    </div>
                )
            }

            else if (this.state.view === "logout") {
                return (
                    <Dashboard cname={this.state.cname} />
                )
            }
    }
}

export default Login