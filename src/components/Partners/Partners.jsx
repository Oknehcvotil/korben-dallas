import { partnersCasinoData, partnersData } from 'data/data';
import Wrapper from 'components/Wrapper/Wrapper';
import {
  PartnersCard,
  PartnersImgCont,
  PartnersList,
  PartnersSection,
  PartnersTitle,
} from './Partners.styled';
import PartnersListItem from 'components/PartnersListItem/PartnersListItem';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: index => ({
    opacity: 1,
    transition: {
      delay: 0.2 * index,
      duration: 0.2,
    },
  }),
};

const Partners = () => {
  return (
    <PartnersSection id="partners">
      <Wrapper style={{ overflow: 'visible' }}>
        <PartnersCard
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          <PartnersTitle>Partners</PartnersTitle>
          <PartnersImgCont>
            <PartnersList>
              {partnersData.map((partner, index) => (
                <PartnersListItem
                  index={index}
                  key={index}
                  width={partner.width}
                  height={partner.height}
                  iconName={partner.iconName}
                />
              ))}
            </PartnersList>
            <PartnersList display="grid" gap="19px 17px">
              {partnersCasinoData.map((img, index) => (
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
                  <img src={img} alt="Partners" />
                </motion.li>
              ))}
            </PartnersList>
          </PartnersImgCont>
        </PartnersCard>
      </Wrapper>
    </PartnersSection>
  );
};

export default Partners;
