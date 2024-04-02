import Icon from 'components/Icon/Icon';
import { PartnersItem } from './PartnersListItem.styled';
import PropTypes from 'prop-types';

const PartnersListItem = ({ width, height, iconName }) => {
  return (
    <PartnersItem>
      <Icon width={width} height={height} iconName={iconName} />
    </PartnersItem>
  );
};

PartnersListItem.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default PartnersListItem;
