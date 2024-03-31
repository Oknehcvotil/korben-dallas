import { communityData } from 'data/data';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  CommunitySection,
  CommunityTitle,
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
      <Wrapper>
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
            <img src={telegramImg} alt="telegram" width="66" height="66" />
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
      </Wrapper>
    </CommunitySection>
  );
};

export default Community;
