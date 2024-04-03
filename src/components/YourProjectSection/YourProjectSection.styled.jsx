import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ProjectSection = styled.section`
  padding: 136px 0 38px;
`;

export const ProjectCard = styled(motion.div)`
  border-radius: 41px;
  max-width: 1360px;
  min-height: 657px;
  padding: 58px 146px 0;
  overflow: hidden;
  background-color: #000;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
