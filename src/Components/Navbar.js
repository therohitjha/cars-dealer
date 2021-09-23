import React, { Component } from 'react';
import carLogo from '../images/transport.png'
import { FaAlignCenter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  state = {
    isOpen: false
  }

  navToggler = () => {
    let { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render() {
    let { isOpen } = this.state
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/cars-dealer">
              <img src={carLogo} alt="logo official" />
            </Link>
            <button onClick={this.navToggler} type="button" className="nav-btn">
              <FaAlignCenter className="nav-icon" />
            </button>
          </div>
          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>

            <li>
              <Link to="/cars-dealer">Home</Link>
            </li>

            <li>
              <Link to="/Cars">Cars</Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}
