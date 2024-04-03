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
// import heroVideo from '../../assets/videos/hero_video.MP4';
import { motion } from 'framer-motion';

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
          <HeroTitle
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
          >
            Multi-service Digital <strong>Agency</strong>
          </HeroTitle>
          <Logo
            href="/"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.2 }}
          >
            Korben&{!isDesktop && <br />}Dallas{' '}
            {!isDesktop && (
              <Icon width="29.8" height="29.8" iconName="#icon-star" />
            )}
          </Logo>
          <DigitalOpportunities
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.2 }}
          >
            Expand your opportunities in the digital space with professional
            team
          </DigitalOpportunities>
          {isDesktop && (
            <ContactBtn
              href="https://t.me/+rU4Xn2iRY5A2Y2Ji"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.2 }}
            >
              Contact Us
              <Icon width="20" height="16" iconName="#icon-arrow" />
            </ContactBtn>
          )}
        </HeroTitleCont>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <VideoCard>
            <VideoCont>
              <video id="videoPlayer" autoPlay loop muted playsInline>
                {/* <source src={heroVideo} type="video/mp4" /> */}
              </video>
            </VideoCont>
          </VideoCard>
          {!isDesktop && (
            <ContactBtn href="https://t.me/+rU4Xn2iRY5A2Y2Ji">
              Contact Us
              <Icon width="20" height="16" iconName="#icon-arrow" />
            </ContactBtn>
          )}
        </motion.div>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
