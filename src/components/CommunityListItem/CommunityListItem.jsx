import { CommunityItem, CommunityItemLink } from './CommunityListItem.styled';
import PropTypes from 'prop-types';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.2,
    },
  }),
};

const CommunityListItem = ({ children, index }) => {
  return (
    <CommunityItem
      key={index}
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <CommunityItemLink href="/">{children}</CommunityItemLink>
    </CommunityItem>
  );
};

CommunityListItem.propTypes = {
  children: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default CommunityListItem;
