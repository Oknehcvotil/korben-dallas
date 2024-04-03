import styled from '@emotion/styled';

export const TelegramCommunityCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    gap: 3px;
    margin-bottom: 0;
  }
`;

export const TelegramImgLink = styled.a`
  display: contents;
`;

export const TelegramCommunityButton = styled.a`
  border: 1.2px solid #fff;
  border-radius: 58px;
  padding: 9px 19px;
  max-width: 263px;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 19px;
  color: #fff;

  @media (min-width: 1440px) {
    border-color: #000;
    color: #000;
  }
`;
