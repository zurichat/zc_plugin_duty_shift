import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';


import { Link } from 'react-router-dom';
import './NavMenu.css';
import DropdownCustom from './customs/Dropdown';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header style={{ marginBottom: '-17px', }}>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" style={{ backgroundColor: '#00B87C', height: '40px' }}>
          <Container>
            <NavbarBrand tag={Link} to="/" ><h5 style={{ color: '#fff' }}>Team Tolstoy-.NET/Plugin</h5></NavbarBrand>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/"> Schedule</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/"> Request</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/"> Settings</NavLink>
              </NavItem>
            </Nav>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">


                    <DropdownCustom />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/"> Share with team</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
