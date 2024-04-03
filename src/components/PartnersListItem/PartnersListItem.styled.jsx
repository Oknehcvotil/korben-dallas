import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const PartnersItem = styled(motion.li)`
  &:not(:last-of-type) {
    margin-bottom: 22px;
  }
`;
