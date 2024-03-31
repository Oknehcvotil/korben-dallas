import styled from '@emotion/styled';

export const CommunitySection = styled.section`
  padding-top: 34px;
`;

export const CommunityTitle = styled.h2`
  font-weight: 600;
  font-size: 46px;
  line-height: 110%;
  margin-bottom: 48px;
  text-align: center;
`;

export const CommunityText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 140%;
  text-align: center;
  max-width: 220px;
  margin: 0 auto;
  margin-bottom: 18px;

  &:last-of-type {
    margin-bottom: 33px;
  }
`;

export const CommunityList = styled.ul`
  list-style: none;
  padding: 0;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const TelegramCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;

  gap: 15px;
`;

export const JoinBtn = styled.a`
  border: 1.54px solid #000;
  border-radius: 74px;
  padding: 12px 24px;
  max-width: 208px;
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
`;
