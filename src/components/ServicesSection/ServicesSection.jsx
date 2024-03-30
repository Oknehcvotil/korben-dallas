import { servicesListData } from 'data/data';
import {
  ServCard,
  ServSection,
  ServWrapper,
  ServTitle,
  ServList,
} from './ServicesSection.styled';
import ServicesListItem from 'components/ServicesListItem/ServicesListItem';

const ServicesSection = () => {
  return (
    <ServSection>
      <ServWrapper>
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
      </ServWrapper>
    </ServSection>
  );
};

export default ServicesSection;
