import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const CommunityItem = styled(motion.li)`
  margin: 0 auto;
  border-radius: 14px;
  padding: 9px 4px;
  max-width: 284px;
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  @media (min-width: 1440px) {
    border-radius: 14px;
    padding: 9px 4px;
    max-width: 344px;
    width: 344px;
    height: 118px;

    &:not(:last-of-type) {
      margin-bottom: 44px;
    }
  }
`;

export const CommunityItemLink = styled.a`
  font-weight: 500;
  font-size: 22px;
  line-height: 110%;
  color: #fff;
`;
