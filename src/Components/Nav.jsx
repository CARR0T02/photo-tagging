import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({ className }) {
  return (
    <Navbar className={className}>
      <Navbar.Brand>
        <NavLink to={'/'}>LOGO</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link className={className}>
          <NavLink to={'/'}>Home</NavLink>
        </Navbar.Link>
        <Navbar.Link className={className}>
          <NavLink to={'/about'}>About</NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
