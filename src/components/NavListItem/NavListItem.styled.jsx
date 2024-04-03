import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const NavItem = styled(motion.li)`
  &:not(:last-of-type) {
    margin-right: 16px;
  }
`;

export const NavLink = styled.a`
  border: 1px solid #000;
  border-radius: 48px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #000;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: #d3f500;
    color: #d3f500;
    outline: none;
  }
`;
