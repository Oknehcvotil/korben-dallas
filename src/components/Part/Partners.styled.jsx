import styled from '@emotion/styled';

export const PartnersSection = styled.section`
  padding-top: 50px;
  padding-bottom: 13px;
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
`;

export const PartnersTitle = styled.h2`
  font-weight: 600;
  font-size: 46px;
  line-height: 110%;
  text-align: center;
  margin-bottom: 68px;
`;

export const PartnersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  &:not(:last-of-type) {
    margin-bottom: 79px;
  }

  display: ${props => props.display || ''};
  gap: ${props => props.gap || ''};

  grid-template-columns: repeat(2, auto);
  grid-auto-rows: auto;
  justify-items: center;
  align-items: center;
`;
