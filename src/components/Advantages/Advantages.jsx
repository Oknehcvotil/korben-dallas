import { projectsData, advantagesListData } from 'data/data';
import Wrapper from 'components/Wrapper/Wrapper';
import AdvantagesListItem from 'components/AdvantagesListItem/AdvantagesListItem';
import {
  AdvantagesSection,
  AdvantagesTitle,
  ProjectsList,
  AdvantagesList,
  AdvantagesCard,
  TitleCont,
} from './Advantages.styled';
import useResize from 'hooks/useResize';

const Advantages = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <AdvantagesSection id="work">
      <Wrapper
        style={
          isDesktop
            ? {
                overflow: 'visible',
              }
            : undefined
        }
      >
        <AdvantagesCard>
          <TitleCont>
            <AdvantagesTitle>Most powerful agency for </AdvantagesTitle>
            <ProjectsList>
              {projectsData.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ProjectsList>
          </TitleCont>
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
      </Wrapper>
    </AdvantagesSection>
  );
};

export default Advantages;
