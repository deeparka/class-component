import React, { Component } from 'react'
import Login from './Login';

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { view: "logout" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ view: "login" });
    }

    render() {
        if (this.state.view === "logout") {
            return (
                <div>
                    <h1>Dashboard</h1>
                    <h3>Welcome {this.props.cname}</h3>
    
                    <button onClick={this.handleClick}>Logout</button>
                </div>
            )
        } 
        else if (this.state.view === "login") {
            return (
                <Login />
            )
        }
    }
}

export default Dashboard