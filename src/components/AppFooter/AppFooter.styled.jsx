import styled from '@emotion/styled';

export const FooterCard = styled.div`
  border-radius: 16px;
  padding: 32px 16px;
  max-width: 345px;
  min-height: 1312px;
  background-color: black;
  margin-bottom: 25px;

  @media (min-width: 1440px) {
    margin-bottom: 55px;
    border-radius: 40px;
    max-width: 1360px;
    width: 100%;
    min-height: 440px;
    padding: 89px 21px 0 35px;
    position: relative;
  }
`;

export const LogoCont = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding-bottom: 42px;
    gap: 82px;
  }
`;

export const FooterLogoLink = styled.a`
  font-weight: 700;
  font-size: 27px;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  span {
    font-weight: 300;
    font-size: 10px;
  }

  @media (min-width: 1440px) {
    font-size: 84px;
    margin: 0;
    align-self: flex-end;
    margin-bottom: 0;

    span {
      font-size: 31px;
      margin: 0;
    }
  }
`;

export const FooterTextCont = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const AddressText = styled.p`
  font-weight: 500;
  font-size: 8px;
  line-height: 325%;
  color: #fff;
  margin-bottom: 21px;

  @media (min-width: 1440px) {
    margin-bottom: 0;
    font-size: 16px;
    line-height: 162%;
  }
`;

export const CopyRightText = styled.p`
  font-weight: 500;
  font-size: 10px;
  color: #fff;
  text-align: center;

  @media (min-width: 1440px) {
    font-size: 16px;
    align-self: flex-end;
  }
`;
