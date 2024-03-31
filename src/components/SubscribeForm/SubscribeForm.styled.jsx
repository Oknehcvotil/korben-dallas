import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const EmailInput = styled.input`
  border-radius: 48px;
  padding: 17px 32px;
  width: 313px;
  height: 54px;
  background-color: #fff;
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 140%;
    color: #4b5563;
  }
`;

export const SubscribeBtn = styled.button`
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
`;
