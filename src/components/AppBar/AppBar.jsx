import React from 'react';
import { Header, NavList, HeaderLogo, HeaderCont } from './AppBar.styled';
import Wrapper from 'components/Wrapper/Wrapper';
import { navData } from 'data/data';
import NavListItem from 'components/NavListItem/NavListItem';
import TelegramCommunityBtn from 'components/TelegramCommunityBtn/TelegramCommunityBtn';

const AppBar = () => {
  return (
    <Header>
      <Wrapper
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <nav>
          <NavList>
            {navData.map((data, index) => (
              <NavListItem key={index} name={data.name} hash={data.hash} />
            ))}
          </NavList>
        </nav>
        <HeaderLogo>
          K&D <span>DIGITAL AGENCY</span>
        </HeaderLogo>
        <TelegramCommunityBtn />
      </Wrapper>
    </Header>
  );
};

export default AppBar;
