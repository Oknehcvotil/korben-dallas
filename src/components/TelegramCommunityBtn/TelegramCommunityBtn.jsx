import telegramImg from '../../assets/images/telegram_logo.png';
import {
  TelegramCommunityCont,
  TelegramCommunityButton,
  TelegramImgLink,
} from './TelegramCommunityBtn.styled';

const TelegramCommunityBtn = () => {
  return (
    <TelegramCommunityCont>
      <TelegramImgLink
        href="https://t.me/+rU4Xn2iRY5A2Y2Ji"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.175 }}
      >
        <img src={telegramImg} alt="telegram" width="40" height="40" />
      </TelegramImgLink>
      <TelegramCommunityButton
        href="https://t.me/+rU4Xn2iRY5A2Y2Ji"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.175 }}
      >
        Community
      </TelegramCommunityButton>
    </TelegramCommunityCont>
  );
};

export default TelegramCommunityBtn;
