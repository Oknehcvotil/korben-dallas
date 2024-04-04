import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Header = styled.header`
  padding-top: 18px;
  @media (min-width: 1440px) {
    padding-top: 30px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled(motion.a)`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 300;
    font-size: 15px;
  }

  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    scale: 1.1;
    outline: none;
  }
`;
