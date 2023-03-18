import React from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Notfound from "./Notfound";

class Main extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <div>
            <h1>Simple SPA</h1>
            <div className="content">
            <ul className="header">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/stuff/:id" element={<Stuff />} />
                <Route path="/contact" element={<Contact />} />
                <Route element={<Notfound />}/>
            </Routes>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }

  export default Main