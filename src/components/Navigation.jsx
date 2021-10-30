import React, { Component } from 'react';
import { Collapse, Button, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
      this.toggleNav = this.toggleNav.bind(this);

  }


   toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return(
      <Navbar className="navigation" dark sticky="top" expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="./assets/NFM-logo.png"
              height="70"
              width="70"
              alt="NFM Indoor"
            /> NFM Indoor
          </NavbarBrand>
         <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <i className="fa fa-home fa-lg" /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <i className="fa fa-info fa-lg" /> About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <i className="fa fa-address-card fa-lg" /> Contact Us
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

