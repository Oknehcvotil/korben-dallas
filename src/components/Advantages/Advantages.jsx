import { projectsData, advantagesListData } from 'data/data';
import AdvantagesListItem from 'components/AdvantagesListItem/AdvantagesListItem';
import {
  AdvantagesSection,
  AdvantagesTitle,
  AdvantagesWrapper,
  ProjectsList,
  AdvantagesList,
  AdvantagesCard,
} from './Advantages.styled';

const Advantages = () => {
  return (
    <AdvantagesSection>
      <AdvantagesWrapper>
        <AdvantagesCard>
          <AdvantagesTitle>Most powerful agency for </AdvantagesTitle>
          <ProjectsList>
            {projectsData.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ProjectsList>
          <AdvantagesList>
            {advantagesListData.map((advantage, index) => (
              <AdvantagesListItem
                key={index}
                amount={advantage.amount}
                title={advantage.title}
                description={advantage.description}
              />
            ))}
          </AdvantagesList>
        </AdvantagesCard>
      </AdvantagesWrapper>
    </AdvantagesSection>
  );
};

export default Advantages;
