import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav({ className, childClass }) {
  return (
    <Navbar className={className}>
      <Navbar.Brand>
        <NavLink to={'/'}>LOGO</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className={childClass}>
          <NavLink to={'/'}>Home</NavLink>
        </div>
        <div className={childClass}>
          <NavLink to={'/about'}>About</NavLink>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
