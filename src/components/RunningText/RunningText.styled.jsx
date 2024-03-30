import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 375px;
  margin: 0 auto;
  overflow: hidden;
  height: 52px;
  display: flex;
  align-items: center;
  background-color: black;
  font-family: var(--second-family);
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  white-space: nowrap;
`;

export const RunningTextCont = styled.div`
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;

  svg {
    white-space: nowrap;
    fill: #fff;
    margin-right: 24px;
  }
`;
