import styled from '@emotion/styled';

export const NavItem = styled.li`
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
`;
