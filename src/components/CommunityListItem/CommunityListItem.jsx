import { CommunityItem, CommunityItemLink } from './CommunityListItem.styled';

const CommunityListItem = ({ children }) => {
  return (
    <CommunityItem>
      <CommunityItemLink href="/">{children}</CommunityItemLink>
    </CommunityItem>
  );
};

export default CommunityListItem;
