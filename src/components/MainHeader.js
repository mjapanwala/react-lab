import React from 'react';
import { Navbar, NavbarBrand, Nav, Button } from 'reactstrap';

/**
 * NOTHING TO DO IN THIS FILE
 */

const MainHeader = props => (
  <Navbar color="primary" dark expand>
    <NavbarBrand>Day Three Review</NavbarBrand>

    <Nav>
      {props.isEditing ? (
        <Button size="sm" color="danger" onClick={props.cancelEdit}>
          Cancel
        </Button>
      ) : (
        <Button size="sm" color="warning" onClick={props.startEdit}>
          Edit
        </Button>
      )}
    </Nav>
  </Navbar>
);

export default MainHeader;
