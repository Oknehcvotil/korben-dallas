import { servicesListData } from 'data/data';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  ServCard,
  ServSection,
  ServTitle,
  ServList,
} from './ServicesSection.styled';
import ServicesListItem from 'components/ServicesListItem/ServicesListItem';

const ServicesSection = () => {
  return (
    <ServSection>
      <Wrapper>
        <ServCard>
          <ServTitle>
            K&D <span>Services</span>
          </ServTitle>
          <ServList>
            {servicesListData.map((service, index) => (
              <ServicesListItem
                key={index}
                img={service.icon}
                title={service.title}
                span={service.span}
              />
            ))}
          </ServList>
        </ServCard>
      </Wrapper>
    </ServSection>
  );
};

export default ServicesSection;
