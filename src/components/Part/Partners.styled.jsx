import styled from '@emotion/styled';

export const PartnersSection = styled.section`
  padding-top: 50px;
  padding-bottom: 13px;

  @media (min-width: 1440px) {
    padding-top: 52px;
    padding-bottom: 0;
  }
`;

export const PartnersCard = styled.div`
  border-radius: 16px;
  max-width: 345px;
  min-height: 932px;
  background: #d3c2ad;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 49px 0;

  @media (min-width: 1440px) {
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    max-width: 100%;
    min-height: 0;
  }
`;

export const PartnersTitle = styled.h2`
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 46px;
  line-height: 110%;
  text-align: center;
  margin-bottom: 68px;

  @media (min-width: 1440px) {
    font-size: 62px;
    margin-bottom: 88px;
  }
`;

export const PartnersImgCont = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const PartnersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 79px;
  }

  &:last-of-type {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 19px 17px;
  }

  @media (min-width: 1440px) {
    &:last-of-type {
      margin-bottom: 88px;
      width: 1305px;
      gap: 0;
      justify-content: space-between;

      img {
        filter: grayscale(100%);
      }
    }
  }

  @media (min-width: 1440px) {
    &:not(:last-of-type) {
      margin-bottom: 0px;
      flex-direction: row;
      justify-content: space-between;
      column-gap: 61px;
      width: 856px;
      flex-wrap: wrap;
    }
  }
`;
