import Icon from 'components/Icon/Icon';
import {
  ServItem,
  ServIconCont,
  ServItemTitle,
} from './ServicesListItem.styled';
import useResize from 'hooks/useResize';

const ServicesListItem = ({ img, title, span, text }) => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <ServItem>
      <ServIconCont>
        <Icon width="26" height="26" iconName={img} />
      </ServIconCont>
      <ServItemTitle>
        {title} <span>{span}</span>
      </ServItemTitle>
      {isDesktop && text && <p>{text}</p>}
    </ServItem>
  );
};

export default ServicesListItem;
