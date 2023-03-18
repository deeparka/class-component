import React, { Component } from 'react';
import Academic from './Academic';
import Header from './Header';
import Objective from './Objective';
import PersonalDetails from './PersonalDetails';
import Projects from './Projects';
import Skills from './Skills';

export class Resume extends Component {
  render() {
    return (
      <div>
        <Header />

        <Objective />
        <Skills body="HTML, CSS, JS" />
        <Academic />
        <Projects />
        <PersonalDetails />
      </div>
    )
  }
}

export default Resume