import React from 'react';
import { Header, NavList, HeaderLogo } from './AppBar.styled';
import Wrapper from 'components/Wrapper/Wrapper';
import { navData } from 'data/data';
import NavListItem from 'components/NavListItem/NavListItem';
import TelegramCommunityBtn from 'components/TelegramCommunityBtn/TelegramCommunityBtn';
import useResize from 'hooks/useResize';

const AppBar = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <Header>
      <Wrapper
        style={{
          display: 'flex',
          alignItems: isDesktop ? 'flex-end' : 'center',
          justifyContent: isDesktop ? 'space-between' : 'center',
          flexWrap: 'wrap',
          rowGap: '20px',
          overflow: 'visible',
        }}
      >
        <nav>
          <NavList>
            {navData.map((data, index) => (
              <NavListItem
                key={index}
                index={index}
                name={data.name}
                hash={data.hash}
              />
            ))}
          </NavList>
        </nav>
        {isDesktop && (
          <HeaderLogo
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.175 }}
          >
            K&D <span>DIGITAL AGENCY</span>
          </HeaderLogo>
        )}
        {isDesktop ? (
          <TelegramCommunityBtn />
        ) : (
          <TelegramCommunityBtn
            margin={0}
            direction="row-reverse"
            gap="13px"
            color="#000"
            animateProp={-100}
          />
        )}
      </Wrapper>
    </Header>
  );
};

export default AppBar;
