import styled from '@emotion/styled';

export const ServItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 314px;
  height: 321px;
  background-color: black;
  margin: 0 auto;
  border-radius: 24px;

  &:not(:last-child) {
    margin-bottom: 24px;
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

  span {
    font-weight: 500;
    font-size: 38px;
    line-height: 110%;
  }
`;
