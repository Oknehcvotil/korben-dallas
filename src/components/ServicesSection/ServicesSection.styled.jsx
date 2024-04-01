import styled from '@emotion/styled';

export const ServSection = styled.section`
  padding-top: 21px;

  @media (min-width: 1440px) {
    padding-top: 43px;
  }
`;

export const ServCard = styled.div`
  border-radius: 24px;
  max-width: 345px;
  min-height: 1265px;
  background: #d3f500;
  padding: 30px 15px 0;

  @media (min-width: 1440px) {
    border-radius: 40px;
    max-width: 1360px;
    min-height: 1062px;
    padding: 80px 59px 114px 95px;
  }
`;

export const ServTitle = styled.h2`
  font-weight: 600;
  font-size: 62px;
  color: #000;
  line-height: 120%;
  max-width: 254px;
  margin: 0 auto 38px;

  span {
    font-weight: 400;
  }

  @media (min-width: 1440px) {
    margin: 0 0 48px;
    max-width: 471px;
  }
`;

export const ServList = styled.ul`
  list-style: none;
  padding: 0;

  @media (min-width: 1440px) {
    margin: 0;
    display: grid;
    justify-content: space-evenly;
    grid:
      'strategy strategy accounts'
      'design media accounts';
  }
`;
