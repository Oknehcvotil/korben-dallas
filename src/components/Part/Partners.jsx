import { partnersCasinoData, partnersData } from 'data/data';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  PartnersCard,
  PartnersList,
  PartnersSection,
  PartnersTitle,
} from './Partners.styled';
import PartnersListItem from 'components/PartnersListItem/PartnersListItem';

const Partners = () => {
  return (
    <PartnersSection>
      <Wrapper>
        <PartnersCard>
          <PartnersTitle>Partners</PartnersTitle>
          <PartnersList>
            {partnersData.map((partner, index) => (
              <PartnersListItem
                key={index}
                width={partner.width}
                height={partner.height}
                iconName={partner.iconName}
              />
            ))}
          </PartnersList>
          <PartnersList display="grid" gap="19px 17px">
            {partnersCasinoData.map((img, index) => (
              <li key={index}>
                <img src={img} alt="Partners" />
              </li>
            ))}
          </PartnersList>
        </PartnersCard>
      </Wrapper>
    </PartnersSection>
  );
};

export default Partners;
