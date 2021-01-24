import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className=" navbar navbar-expand-sm navbar-white bg-dark">
        <span className="navbar-brand">AppliExo</span>

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Exercises <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exercises">
                NouveauExercice
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/users">
                NouveauUtilsateur
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
