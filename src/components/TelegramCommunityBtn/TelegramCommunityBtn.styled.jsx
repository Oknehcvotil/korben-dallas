import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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

export const TelegramImgLink = styled(motion.a)`
  display: contents;

  img {
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &:focus {
    outline: none;
    img {
      scale: 1.1;
      outline: none;
    }
  }

  &:active {
    img {
      scale: 1.05;
    }
  }
`;

export const TelegramCommunityButton = styled(motion.a)`
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

  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #d3f500;
    color: #d3f500;
    outline: none;
    scale: 1.05;
    outline: none;
  }

  &:active {
    scale: 1;
  }
`;
