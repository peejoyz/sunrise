import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import sun from "../images/sun.png";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div>
          <Link to="/">
            <img className="sun" src={sun} alt="SUNRISE"></img>
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={this.handleToggle}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        

        <div className="nav-header">
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>

      </nav>
    );
  }
}
