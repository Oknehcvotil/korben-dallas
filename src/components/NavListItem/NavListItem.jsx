import { NavItem, NavLink } from './NavListItem.styled';
import PropTypes from 'prop-types';

const NavListItem = ({ name, hash }) => {
  return (
    <NavItem>
      <NavLink href={hash}>{name}</NavLink>
    </NavItem>
  );
};

NavListItem.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
};

export default NavListItem;
