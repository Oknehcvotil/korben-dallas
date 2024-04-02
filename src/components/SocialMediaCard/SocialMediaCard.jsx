import { socialMediaData } from 'data/data';
import { Card, SocialMediaList } from './SocialMediaCard.styled';
import useResize from 'hooks/useResize';

const SocialMediaCard = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <Card>
      <SocialMediaList>
        {socialMediaData.map((item, index) => (
          <li key={index}>
            <img src={isDesktop ? item.imgDesk : item.img} alt={item.alt} />
          </li>
        ))}
      </SocialMediaList>
    </Card>
  );
};

export default SocialMediaCard;
