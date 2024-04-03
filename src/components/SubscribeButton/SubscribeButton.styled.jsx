import styled from '@emotion/styled';

export const SubscribeBtn = styled.a`
  border-radius: 56px;
  max-width: 313px;
  width: 100%;
  height: 52px;
  background: linear-gradient(90deg, #faff00 0%, #00f5a0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: #000;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.01em;

  @media (min-width: 1440px) {
    border-radius: 57px;
    height: 52px;
    font-size: 16px;
    margin-bottom: 0;
    margin-right: 217px;
  }
`;
