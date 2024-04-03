import Icon from 'components/Icon/Icon';
import {
  ServItem,
  ServIconCont,
  ServItemTitle,
} from './ServicesListItem.styled';
import useResize from 'hooks/useResize';
import PropTypes from 'prop-types';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: index => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2 * index,
      duration: 0.2,
    },
  }),
};

const ServicesListItem = ({ img, title, span, text, index }) => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <ServItem
      key={index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
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

ServicesListItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number,
  span: PropTypes.string,
  text: PropTypes.string,
};

export default ServicesListItem;
