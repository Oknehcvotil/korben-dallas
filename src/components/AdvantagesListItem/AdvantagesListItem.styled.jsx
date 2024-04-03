import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AdvantageItem = styled(motion.li)`
  color: #fff;
  text-align: center;
  max-width: 268px;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media (min-width: 1440px) {
    flex-basis: calc((100% - 39px) / 2);
    text-align: left;

    span {
      color: #faff00;
    }

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const Amount = styled.p`
  font-weight: 500;
  font-size: 42px;
  margin-bottom: 8px;
  line-height: 120%;
`;

export const AdvantageTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #d1d5db;
`;
