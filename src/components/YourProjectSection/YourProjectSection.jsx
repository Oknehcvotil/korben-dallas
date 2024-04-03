import Wrapper from 'components/Wrapper/Wrapper';
import { ProjectCard, ProjectSection } from './YourProjectSection.styled';
import StartProjectTitle from 'components/StartProjectTitle/StartProjectTitle';
import SocialMediaCard from 'components/SocialMediaCard/SocialMediaCard';
import IntroParagraph from 'components/IntroParagraph/IntroParagraph';
import SubscribeButton from 'components/SubscribeButton/SubscribeButton';

const YourProjectSection = () => {
  return (
    <ProjectSection id="form">
      <Wrapper>
        <ProjectCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <StartProjectTitle />
          <SocialMediaCard />
          <IntroParagraph />
          <SubscribeButton />
        </ProjectCard>
      </Wrapper>
    </ProjectSection>
  );
};

export default YourProjectSection;
