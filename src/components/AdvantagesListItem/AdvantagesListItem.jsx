import {
  AdvantageItem,
  AdvantageTitle,
  Amount,
  Description,
} from './AdvantagesListItem.styled';

const AdvantagesListItem = ({ amount, title, description }) => (
  <AdvantageItem>
    <Amount>{amount}</Amount>
    <AdvantageTitle>{title}</AdvantageTitle>
    <Description>{description}</Description>
  </AdvantageItem>
);

export default AdvantagesListItem;
