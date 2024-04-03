import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CommunitySection = styled.section`
  padding-top: 34px;

  @media (min-width: 1440px) {
    padding-top: 43px;
  }
`;

export const CommunityCard = styled(motion.div)`
  @media (min-width: 1440px) {
    border-radius: 40px;
    max-width: 1360px;
    width: 100%;
    min-height: 920px;
    background: #f3f4f6;
    padding: 56px 77px 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CommunityTitle = styled.h2`
  font-family: var(--second-family);
  font-weight: 600;
  font-size: 46px;
  line-height: 110%;
  margin-bottom: 48px;
  text-align: center;

  @media (min-width: 1440px) {
    align-self: flex-start;
    max-width: 425px;
    font-size: 74px;
    margin: 10px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -943px;
      border: 1px solid #000;
      border-radius: 48px;
      width: 136px;
      height: 36px;
    }
  }
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

  @media (min-width: 1440px) {
    font-size: 16px;
    max-width: 100%;

    &:last-of-type {
      margin-bottom: 22px;
    }
  }
`;

export const CommunityLinksContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 120px;
  }
`;

export const CommunityList = styled.ul`
  list-style: none;
  padding: 0;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  @media (min-width: 1440px) {
    margin: 0;
    &:not(:last-of-type) {
      margin: 0;
    }
  }
`;

export const TelegramCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  gap: 15px;

  @media (min-width: 1440px) {
    margin: 0;
    gap: 54px;
    align-self: flex-end;
  }
`;

export const TelegramImgCont = styled(motion.div)`
  @media (min-width: 1440px) {
    border-radius: 100%;
    padding: 9px;
    width: 240px;
    height: 240px;
    backdrop-filter: blur(60.5837287902832px);
    background: rgba(255, 255, 255, 0.2);
    border: 12.82px solid #d3f500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    img {
      scale: 1.1;
      outline: none;
    }
  }
`;

export const JoinBtn = styled(motion.a)`
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
  color: #000;

  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #d3f500;
    color: #d3f500;
    outline: none;
    scale: 1.05;
  }

  &:active {
    scale: 1;
  }
`;
