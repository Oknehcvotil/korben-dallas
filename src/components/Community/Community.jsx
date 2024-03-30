import { communityData } from 'data/data';
import {
  CommunitySection,
  CommunityTitle,
  CommunityWrapper,
  CommunityText,
  CommunityList,
  TelegramCont,
  JoinBtn,
} from './Community.styled';
import CommunityListItem from 'components/CommunityListItem/CommunityListItem';
import telegramImg from '../../assets/images/telegram_logo.png';

const Community = () => {
  return (
    <CommunitySection>
      <CommunityWrapper>
        <CommunityTitle>Explore Our Community</CommunityTitle>
        <CommunityText>
          At <strong>K&B</strong> we invite you to embark on a visual journey
          <br />
          through our community.
        </CommunityText>

        <CommunityText>
          More insights & tips, videos, FAQs and description of our <br />
          services and cases.
        </CommunityText>
        <div>
          <CommunityList>
            {communityData
              .slice(0, communityData.length / 2)
              .map((community, index) => (
                <CommunityListItem key={index}>{community}</CommunityListItem>
              ))}
          </CommunityList>
          <TelegramCont>
            <img src={telegramImg} alt="telegram" />
            <JoinBtn>JOIN</JoinBtn>
          </TelegramCont>
          <CommunityList>
            {communityData
              .slice(communityData.length / 2)
              .map((community, index) => (
                <CommunityListItem key={index}>{community}</CommunityListItem>
              ))}
          </CommunityList>
        </div>
      </CommunityWrapper>
    </CommunitySection>
  );
};

export default Community;
