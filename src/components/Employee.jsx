import React, { Component } from 'react'

export class Employee extends Component { 
    render() {
        const name = "Vinay";
        const age = 45;
        const dept = "marketing";

        return (
        <PermanentEmployee name={name} age={age} dept={dept} />
        )

    }
}
  
class PermanentEmployee extends Employee {
    constructor(props) {
        super(props)
    }
    render() {
        const salary = 34000;
        const hike = 30;
        const exp = 4;

        return (
        <div>
            <h1>Name: {this.props.name}</h1>
            <h2>Age: {this.props.age}</h2>
            <h3>Department: {this.props.dept}</h3>
            <DisplayData salary={salary} hike={hike} exp={exp} />
        </div>
        )

    }
}
  
class DisplayData extends PermanentEmployee {
    render() {

    return ( 
        <div>
        <h1>Salary: {this.props.salary}</h1>
        <h2>Hike: {this.props.hike}</h2>
        <h3>Experience: {this.props.exp}</h3>
        </div>
    )

    }
}

export default Employee