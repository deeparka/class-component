import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement() {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
        <div>
            <h2>{this.state.counter}</h2>
            <input type="button" style={{ "height": "30px", "width": "100px"}} value="+" onClick={this.increment} />
            <br />
            <br />
            <input type="button" style={{ "height": "30px", "width": "100px"}} value="-" onClick={this.decrement} />
        </div>
        )
    }

}

export default Counter