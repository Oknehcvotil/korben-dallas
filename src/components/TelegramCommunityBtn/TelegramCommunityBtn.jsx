import telegramImg from '../../assets/images/telegram_logo.png';
import {
  TelegramCommunityCont,
  TelegramCommunityButton,
  TelegramImgLink,
} from './TelegramCommunityBtn.styled';
import PropTypes from 'prop-types';

const TelegramCommunityBtn = ({
  margin,
  direction,
  gap,
  color,
  animateProp,
}) => {
  return (
    <TelegramCommunityCont
      style={{ marginBottom: margin, flexDirection: direction, gap: gap }}
    >
      <TelegramImgLink
        href="https://t.me/+rU4Xn2iRY5A2Y2Ji"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.175 }}
      >
        <img src={telegramImg} alt="telegram" width="40" height="40" />
      </TelegramImgLink>
      <TelegramCommunityButton
        borderсolor={color}
        color={color}
        href="https://t.me/+rU4Xn2iRY5A2Y2Ji"
        initial={{ opacity: 0, x: animateProp ? animateProp : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.175 }}
      >
        Community
      </TelegramCommunityButton>
    </TelegramCommunityCont>
  );
};

TelegramCommunityBtn.propTypes = {
  margin: PropTypes.number,
  direction: PropTypes.string,
  gap: PropTypes.string,
  color: PropTypes.string,
  animateProp: PropTypes.number,
};

export default TelegramCommunityBtn;
