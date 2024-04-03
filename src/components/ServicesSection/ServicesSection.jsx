import { servicesListData } from 'data/data';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  ServCard,
  ServSection,
  ServTitle,
  ServList,
} from './ServicesSection.styled';
import ServicesListItem from 'components/ServicesListItem/ServicesListItem';
import useResize from 'hooks/useResize';

const ServicesSection = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <ServSection id="services">
      <Wrapper>
        <ServCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <ServTitle>
            {!isDesktop ? 'K&D' : 'Korben&Dallas'} <span>Services</span>
          </ServTitle>
          <ServList>
            {servicesListData.slice(0, 3).map((service, index) => (
              <ServicesListItem
                index={index}
                key={index}
                img={service.icon}
                title={service.title}
                span={service.span}
                text={service.text}
              />
            ))}
            {isDesktop &&
              servicesListData
                .slice(-1)
                .map((service, index) => (
                  <ServicesListItem
                    key={index}
                    img={service.icon}
                    title={service.title}
                  />
                ))}
          </ServList>
        </ServCard>
      </Wrapper>
    </ServSection>
  );
};

export default ServicesSection;
