import styled from '@emotion/styled';

export const FooterCard = styled.div`
  border-radius: 16px;
  padding: 32px 16px;
  max-width: 345px;
  min-height: 1312px;
  background-color: black;
`;

export const FooterTitle = styled.h2`
  font-weight: 600;
  font-size: 83px;
  line-height: 110%;
  color: #fff;
  margin-bottom: 20px;

  span {
    color: #d3f500;
  }
`;

export const FooterLogoLink = styled.a`
  font-weight: 700;
  font-size: 27px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 300;
    font-size: 10px;
  }
`;

export const AddressText = styled.p`
  font-weight: 500;
  font-size: 8px;
  line-height: 325%;
  color: #fff;
  margin-bottom: 21px;
`;

export const CopyRightText = styled.p`
  font-weight: 500;
  font-size: 10px;
  color: #fff;
  text-align: center;
`;
