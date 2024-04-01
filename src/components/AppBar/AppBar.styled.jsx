import styled from '@emotion/styled';

export const Header = styled.header`
  padding-top: 30px;
`;

export const HeaderCont = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.a`
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
`;