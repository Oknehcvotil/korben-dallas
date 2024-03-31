import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 375px;
  padding: 0 15px 0;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 40px 0;
  }
`;
