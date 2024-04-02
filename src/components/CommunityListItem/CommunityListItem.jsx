import { CommunityItem, CommunityItemLink } from './CommunityListItem.styled';
import PropTypes from 'prop-types';

const CommunityListItem = ({ children }) => {
  return (
    <CommunityItem>
      <CommunityItemLink href="/">{children}</CommunityItemLink>
    </CommunityItem>
  );
};

CommunityListItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CommunityListItem;
