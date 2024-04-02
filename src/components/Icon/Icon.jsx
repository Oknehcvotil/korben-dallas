import sprite from '../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';

const Icon = ({ iconName, width, height }) => (
  <svg width={width} height={height}>
    <use href={`${sprite}${iconName}`}></use>
  </svg>
);

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default Icon;
