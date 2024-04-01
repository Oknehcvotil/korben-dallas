import styled from '@emotion/styled';

export const ServItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 314px;
  width: 100%;
  height: 321px;
  background-color: black;
  margin: 0 auto;
  border-radius: 24px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    &:nth-of-type(1) {
      grid-area: strategy;
      width: 805px;
      max-width: 100%;
      height: 321px;
      margin-bottom: 26px;
      margin-right: 30px;

      div {
        margin-bottom: 32px;
      }

      h4 {
        display: inline-block;
      }
    }

    &:nth-of-type(2) {
      grid-area: design;
      margin-bottom: 0;
      margin-right: 17px;
      width: 380px;
      max-width: 100%;
      height: 321px;
    }

    &:nth-of-type(3) {
      grid-area: media;
      width: 408px;
      max-width: 100%;
      height: 321px;
      margin-bottom: 0;
      margin-right: 30px;

      h4 {
        font-size: 38px;
      }
    }

    &:nth-of-type(4) {
      grid-area: accounts;
      width: 371px;
      max-width: 100%;
      height: 668px;
      background-color: #f3f4f6;

      div {
        border-color: black;
        margin-bottom: 61px;
      }

      h4 {
        color: black;
        text-align: center;
        max-width: 318px;
        font-weight: 500;
        font-size: 38px;
        line-height: 110%;
      }

      svg {
        fill: black;
      }
    }
  }

  p {
    margin-top: 42px;
    font-weight: 400;
    font-size: 15px;
    line-height: 110%;
    text-align: center;
    color: #fff;
    max-width: 170px;
  }
`;

export const ServIconCont = styled.div`
  border-radius: 8px;
  border: 1px solid #fff;
  width: 61px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  svg {
    fill: #fff;
  }
`;

export const ServItemTitle = styled.h4`
  font-weight: 200;
  font-size: 24px;
  line-height: 110%;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
    font-size: 38px;
    line-height: 110%;
  }
`;
