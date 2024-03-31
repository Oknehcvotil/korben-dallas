import { awardsData } from 'data/data';
import { AwardsList } from './AwardsSection.styled';

const AwardsSection = () => {
  return (
    <AwardsList>
      {awardsData.map((item, index) => (
        <li key={index}>
          <img src={item.img} alt={item.alt} />
        </li>
      ))}
    </AwardsList>
  );
};

export default AwardsSection;
