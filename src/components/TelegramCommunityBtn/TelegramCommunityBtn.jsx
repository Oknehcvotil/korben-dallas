import telegramImg from '../../assets/images/telegram_logo.png';
import { TelegramCommunityCont, TelegramCommunityButton } from './TelegramCommunityBtn.styled';

const TelegramCommunityBtn = () => {
  return (
    <TelegramCommunityCont>
      <img src={telegramImg} alt="telegram" width="40" height="40" />
      <TelegramCommunityButton>Community</TelegramCommunityButton>
    </TelegramCommunityCont>
  );
};

export default TelegramCommunityBtn;
