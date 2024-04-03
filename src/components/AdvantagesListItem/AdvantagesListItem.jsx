import {
  AdvantageItem,
  AdvantageTitle,
  Amount,
  Description,
} from './AdvantagesListItem.styled';
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

const AdvantagesListItem = ({ amount, title, description, index }) => (
  <AdvantageItem
    key={index}
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{
      once: true,
    }}
    custom={index}
  >
    <Amount>{amount}</Amount>
    <AdvantageTitle>{title}</AdvantageTitle>
    <Description>{description}</Description>
  </AdvantageItem>
);

AdvantagesListItem.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AdvantagesListItem;
