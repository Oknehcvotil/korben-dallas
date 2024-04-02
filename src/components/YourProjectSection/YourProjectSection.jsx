import Wrapper from 'components/Wrapper/Wrapper';
import { ProjectCard, ProjectSection } from './YourProjectSection.styled';
import StartProjectTitle from 'components/StartProjectTitle/StartProjectTitle';
import SocialMediaCard from 'components/SocialMediaCard/SocialMediaCard';
import IntroParagraph from 'components/IntroParagraph/IntroParagraph';
import SubscribeForm from 'components/SubscribeForm/SubscribeForm';

const YourProjectSection = () => {
  return (
    <ProjectSection id="form">
      <Wrapper>
        <ProjectCard>
          <StartProjectTitle />
          <SocialMediaCard />
          <IntroParagraph />
          <SubscribeForm />
        </ProjectCard>
      </Wrapper>
    </ProjectSection>
  );
};

export default YourProjectSection;
