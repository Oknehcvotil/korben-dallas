import Icon from 'components/Icon/Icon';
import { PartnersItem } from './PartnersListItem.styled';
import PropTypes from 'prop-types';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.2,
    },
  }),
};

const PartnersListItem = ({ width, height, iconName, index }) => {
  return (
    <PartnersItem
      key={index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <Icon width={width} height={height} iconName={iconName} />
    </PartnersItem>
  );
};

PartnersListItem.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default PartnersListItem;
