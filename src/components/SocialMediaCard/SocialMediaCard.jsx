import { socialMediaData } from 'data/data';
import { Card, SocialMediaList } from './SocialMediaCard.styled';

const SocialMediaCard = () => {
  return (
    <Card>
      <SocialMediaList>
        {socialMediaData.map((item, index) => (
          <li key={index}>
            <img src={item.img} alt={item.alt} />
          </li>
        ))}
      </SocialMediaList>
    </Card>
  );
};

export default SocialMediaCard;
