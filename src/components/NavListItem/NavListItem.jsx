import React from 'react';
import { NavItem, NavLink } from './NavListItem.styled';

const NavListItem = ({ name, hash }) => {
  return (
    <NavItem>
      <NavLink href={hash}>{name}</NavLink>
    </NavItem>
  );
};

export default NavListItem;
