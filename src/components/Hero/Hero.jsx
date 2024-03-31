import Icon from 'components/Icon/Icon';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  HeroSection,
  HeroTitle,
  Logo,
  HeroTitleCont,
  DesignRectangle,
  VideoCont,
  ContactBtn,
  DigitalOpportunities,
  Video,
} from './Hero.styled';
import videoImg from '../../assets/images/video.png';

const Hero = () => {
  return (
    <HeroSection>
      <Wrapper>
        <HeroTitleCont>
          <DesignRectangle />
          <HeroTitle>
            Multi-service Digital <strong>Agency</strong>
          </HeroTitle>
          <Logo href="/">
            Korben& Dallas{' '}
            <Icon width="29.8" height="29.8" iconName="#icon-star" />
          </Logo>
        </HeroTitleCont>
        <DigitalOpportunities>
          Expand your opportunities in the digital space with professional team
        </DigitalOpportunities>
        <div>
          <VideoCont>
            <Video src={videoImg} alt="RA LOGISTICS" />
          </VideoCont>
          <ContactBtn type="button">
            Contact Us
            <Icon width="20" height="16" iconName="#icon-arrow" />
          </ContactBtn>
        </div>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
