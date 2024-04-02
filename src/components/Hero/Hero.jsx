import Icon from 'components/Icon/Icon';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  HeroSection,
  HeroTitle,
  Logo,
  HeroTitleCont,
  DesignRectangle,
  VideoCard,
  ContactBtn,
  DigitalOpportunities,
  VideoCont,
} from './Hero.styled';
import useResize from 'hooks/useResize';
import heroVideo from '../../assets/videos/hero_video.MP4';

const Hero = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <HeroSection>
      <Wrapper
        style={
          isDesktop
            ? {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }
            : undefined
        }
      >
        <HeroTitleCont>
          <DesignRectangle />
          <HeroTitle>
            Multi-service Digital <strong>Agency</strong>
          </HeroTitle>
          <Logo href="/">
            Korben&{!isDesktop && <br />}Dallas{' '}
            {!isDesktop && (
              <Icon width="29.8" height="29.8" iconName="#icon-star" />
            )}
          </Logo>
          <DigitalOpportunities>
            Expand your opportunities in the digital space with professional
            team
          </DigitalOpportunities>
          {isDesktop && (
            <ContactBtn href="#form">
              Contact Us
              <Icon width="20" height="16" iconName="#icon-arrow" />
            </ContactBtn>
          )}
        </HeroTitleCont>
        <div>
          <VideoCard>
            <VideoCont>
              <video id="videoPlayer" autoPlay loop muted playsInline>
                <source src={heroVideo} type="video/mp4" />
              </video>
            </VideoCont>
          </VideoCard>
          {!isDesktop && (
            <ContactBtn href="#form">
              Contact Us
              <Icon width="20" height="16" iconName="#icon-arrow" />
            </ContactBtn>
          )}
        </div>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
