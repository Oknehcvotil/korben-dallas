import Icon from 'components/Icon/Icon';
import {
  ServItem,
  ServIconCont,
  ServItemTitle,
} from './ServicesListItem.styled';

const ServicesListItem = ({ img, title, span }) => {
  return (
    <ServItem>
      <ServIconCont>
        <Icon width="26" height="26" iconName={img} />
      </ServIconCont>
      <ServItemTitle>
        {title}
        <br />
        <span>{span}</span>
      </ServItemTitle>
    </ServItem>
  );
};

export default ServicesListItem;
