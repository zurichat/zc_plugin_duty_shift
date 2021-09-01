import React, { Component } from 'react';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        {/* <Container fluid={true} > */}

        {this.props.children}
        {/* </Container> */}
      </div>
    );
  }
}
