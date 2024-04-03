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
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: index => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.2,
    },
  }),
};

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
        <AdvantagesCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <TitleCont>
            <AdvantagesTitle>Most powerful agency for </AdvantagesTitle>
            <ProjectsList>
              {projectsData.map((project, index) => (
                <motion.li
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {project}
                </motion.li>
              ))}
            </ProjectsList>
          </TitleCont>
          <AdvantagesList>
            {advantagesListData.map((advantage, index) => (
              <AdvantagesListItem
                index={index}
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
