import { communityData } from 'data/data';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  CommunitySection,
  CommunityTitle,
  CommunityText,
  CommunityList,
  TelegramCont,
  JoinBtn,
  CommunityCard,
  CommunityLinksContainer,
  TelegramImgCont,
} from './Community.styled';
import CommunityListItem from 'components/CommunityListItem/CommunityListItem';
import telegramImg from '../../assets/images/telegram_logo.png';
import telegramImgDesktop from '../../assets/images/telegram_logo_desktop.png';
import useResize from 'hooks/useResize';

const Community = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <CommunitySection>
      <Wrapper style={{ overflow: 'visible' }}>
        <CommunityCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.2 }}
        >
          <CommunityTitle>Explore Our Community</CommunityTitle>
          <CommunityText>
            At <strong>K&B</strong> we invite you to embark{' '}
            {isDesktop && <br />}on a visual journey
            {!isDesktop && <br />}
            through our community.
          </CommunityText>

          <CommunityText>
            More insights & tips, videos, FAQs {isDesktop && <br />}and
            description of our {!isDesktop && <br />}
            services and cases.
          </CommunityText>
          <CommunityLinksContainer>
            <CommunityList>
              {communityData
                .slice(0, communityData.length / 2)
                .map((community, index) => (
                  <CommunityListItem index={index} key={index}>
                    {community}
                  </CommunityListItem>
                ))}
            </CommunityList>
            <TelegramCont>
              <TelegramImgCont
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{ delay: 0.2, duration: 0.2 }}
              >
                <a href="https://t.me/+rU4Xn2iRY5A2Y2Ji">
                  <img
                    src={isDesktop ? telegramImgDesktop : telegramImg}
                    alt="telegram"
                    width={isDesktop ? '193.4' : '66'}
                    height={isDesktop ? '193.4' : '66'}
                  />
                </a>
              </TelegramImgCont>
              <JoinBtn
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                }}
                transition={{ duration: 0.2 }}
                href="https://t.me/+rU4Xn2iRY5A2Y2Ji"
              >
                JOIN
              </JoinBtn>
            </TelegramCont>
            <CommunityList>
              {communityData
                .slice(communityData.length / 2)
                .map((community, index) => (
                  <CommunityListItem index={index} key={index}>
                    {community}
                  </CommunityListItem>
                ))}
            </CommunityList>
          </CommunityLinksContainer>
        </CommunityCard>
      </Wrapper>
    </CommunitySection>
  );
};

export default Community;
