import {
  AdvantageItem,
  AdvantageTitle,
  Amount,
  Description,
} from './AdvantagesListItem.styled';
import PropTypes from 'prop-types';

const AdvantagesListItem = ({ amount, title, description }) => (
  <AdvantageItem>
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
