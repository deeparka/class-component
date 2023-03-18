import React, { Component } from 'react'

export class LogInForm extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            city: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Form submitted");
    }

    handleNameChange(e) {
        this.setState({ username: e.target.value })
    }

    handleCityChange(e) {
        this.setState({ city: e.target.value })
    }

    render() {
        return (
        <div>
            <form action="" onSubmit={this.handleSubmit}>
                <h1>Login Form</h1>
                <label htmlFor="">Username <input type="text" name="" id="" onChange={this.handleNameChange} /></label>
                <label htmlFor="">City</label>
                <select name="" id="" onChange={this.handleCityChange}>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Pune">Pune</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Chennai">Chennai</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}

export default LogInForm