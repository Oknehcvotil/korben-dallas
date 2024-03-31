import styled from '@emotion/styled';

export const AwardsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;
