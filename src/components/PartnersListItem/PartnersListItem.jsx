import Icon from 'components/Icon/Icon';
import { PartnersItem } from './PartnersListItem.styled';

const PartnersListItem = ({ width, height, iconName }) => {
  return (
    <PartnersItem>
      <Icon width={width} height={height} iconName={iconName} />
    </PartnersItem>
  );
};

export default PartnersListItem;
