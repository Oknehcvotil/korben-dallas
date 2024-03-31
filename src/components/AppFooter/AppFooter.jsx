import Wrapper from 'components/Wrapper/Wrapper';
import {
  AddressText,
  CopyRightText,
  FooterCard,
  FooterLogoLink,
  FooterText,
  FooterTitle,
  TelegramCommunityBtn,
  TelegramCommunityCont,
} from './AppFooter.styled';
import telegramImg from '../../assets/images/telegram_logo.png';
import SubscribeForm from 'components/SubscribeForm/SubscribeForm';
import SocialMediaCard from 'components/SocialMediaCard/SocialMediaCard';
import AwardsSection from 'components/AwardsSection/AwardsSection';

const AppFooter = () => {
  return (
    <footer>
      <Wrapper>
        <FooterCard>
          <FooterTitle>
            Start Your <span>Project</span>
          </FooterTitle>
          <FooterText>
            Whether you're envisioning a stunning website, a captivating
            marketing campaign, or a cutting-edge digital solution, we're here
            to bring your ideas to life.
          </FooterText>
          <TelegramCommunityCont>
            <img src={telegramImg} alt="telegram" width="40" height="40" />
            <TelegramCommunityBtn>Community</TelegramCommunityBtn>
          </TelegramCommunityCont>
          <SubscribeForm />
          <SocialMediaCard />
          <FooterLogoLink>
            K&D <span>DIGITAL AGENCY</span>
          </FooterLogoLink>
          <AwardsSection />
          <AddressText>
            K&D S.r.l.s &copy;2021-2024 <br />
            Via Ponteselice Zona Ind.le Sacomyr - Cansurzoto ASI - 81203 Latert
          </AddressText>
          <CopyRightText>
            Copyright &copy; 2024 K&B All rights reserved.
          </CopyRightText>
        </FooterCard>
      </Wrapper>
    </footer>
  );
};

export default AppFooter;
