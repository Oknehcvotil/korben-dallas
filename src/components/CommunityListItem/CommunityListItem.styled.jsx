import styled from '@emotion/styled';

export const CommunityItem = styled.li`
  border-radius: 14px;
  padding: 9px 4px;
  max-width: 284px;
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const CommunityItemLink = styled.a`
  font-weight: 500;
  font-size: 22px;
  line-height: 110%;
  color: #fff;
`;
