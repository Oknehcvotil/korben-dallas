import { NavItem, NavLink } from './NavListItem.styled';
import PropTypes from 'prop-types';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.175 * index,
    },
  }),
};

const NavListItem = ({ name, hash, index }) => {
  return (
    <NavItem
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      custom={index}
    >
      <NavLink href={hash}>{name}</NavLink>
    </NavItem>
  );
};

NavListItem.propTypes = {
  name: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
};

export default NavListItem;
