import telegramImg from '../../assets/images/telegram_logo.png';
import {
  TelegramCommunityCont,
  TelegramCommunityButton,
  TelegramImgLink,
} from './TelegramCommunityBtn.styled';

const TelegramCommunityBtn = () => {
  return (
    <TelegramCommunityCont>
      <TelegramImgLink href="https://t.me/+rU4Xn2iRY5A2Y2Ji">
        <img src={telegramImg} alt="telegram" width="40" height="40" />
      </TelegramImgLink>
      <TelegramCommunityButton href="https://t.me/+rU4Xn2iRY5A2Y2Ji">
        Community
      </TelegramCommunityButton>
    </TelegramCommunityCont>
  );
};

export default TelegramCommunityBtn;
