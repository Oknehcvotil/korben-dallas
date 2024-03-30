import Icon from 'components/Icon/Icon';
import { Wrapper, RunningTextCont } from './RunningText.styled';
import Marquee from 'react-fast-marquee';

const RunningText = () => {
  return (
    <section>
      <Wrapper>
        <Marquee autoFill={true}>
          <RunningTextCont>
            <Icon width="23.78" height="28.38" iconName="#icon-star" />
            <span>Let's build your project</span>
          </RunningTextCont>
        </Marquee>
      </Wrapper>
    </section>
  );
};

export default RunningText;
