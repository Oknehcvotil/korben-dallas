import { awardsData } from 'data/data';
import { AwardsList } from './AwardsSection.styled';
import useResize from 'hooks/useResize';

const AwardsSection = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <AwardsList>
      {awardsData.map((item, index) => (
        <li key={index}>
          <img src={isDesktop ? item.imgDesk : item.img} alt={item.alt} />
        </li>
      ))}
    </AwardsList>
  );
};

export default AwardsSection;
