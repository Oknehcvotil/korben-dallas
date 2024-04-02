import Wrapper from 'components/Wrapper/Wrapper';
import {
  AddressText,
  CopyRightText,
  FooterCard,
  FooterLogoLink,
  FooterTextCont,
  LogoCont,
} from './AppFooter.styled';
import SubscribeForm from 'components/SubscribeForm/SubscribeForm';
import SocialMediaCard from 'components/SocialMediaCard/SocialMediaCard';
import AwardsSection from 'components/AwardsSection/AwardsSection';
import TelegramCommunityBtn from 'components/TelegramCommunityBtn/TelegramCommunityBtn';
import IntroParagraph from 'components/IntroParagraph/IntroParagraph';
import useResize from 'hooks/useResize';
import StartProjectTitle from 'components/StartProjectTitle/StartProjectTitle';

const AppFooter = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <footer>
      <Wrapper>
        <FooterCard>
          {!isDesktop && <StartProjectTitle />}
          {!isDesktop && <IntroParagraph />}
          {!isDesktop && <TelegramCommunityBtn />}
          {!isDesktop && <SubscribeForm />}
          {!isDesktop && <SocialMediaCard />}
          <LogoCont>
            <FooterLogoLink>
              K&D <span>DIGITAL AGENCY</span>
            </FooterLogoLink>
            <AwardsSection />
          </LogoCont>
          <FooterTextCont>
            <AddressText>
              K&D S.r.l.s &copy;2021-2024 <br />
              Via Ponteselice Zona Ind.le Sacomyr - Cansurzoto ASI - 81203
              Latert
            </AddressText>
            <CopyRightText>
              Copyright &copy; 2024 K&B All rights reserved.
            </CopyRightText>
          </FooterTextCont>
        </FooterCard>
      </Wrapper>
    </footer>
  );
};

export default AppFooter;
