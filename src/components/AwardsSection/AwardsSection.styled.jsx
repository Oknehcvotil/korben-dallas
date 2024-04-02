import styled from '@emotion/styled';

export const AwardsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media (min-width: 1440px) {
    max-width: 435px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    margin-bottom: 47px;
    

    li {
      &:not(:last-of-type) {
        margin-bottom: 0;
      }
    }

    li {
      &:last-of-type {
        position: absolute;
        bottom: 113px;
        right: 104px;
      }
    }
  }
`;
