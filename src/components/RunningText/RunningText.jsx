import Icon from 'components/Icon/Icon';
import { RunningTextWrapper, RunningTextCont } from './RunningText.styled';
import Marquee from 'react-fast-marquee';

const RunningText = () => {
  return (
    <section>
      <RunningTextWrapper>
        <Marquee autoFill={true}>
          <RunningTextCont>
            <Icon width="23.78" height="28.38" iconName="#icon-star" />
            <span>Let's build your project</span>
          </RunningTextCont>
        </Marquee>
      </RunningTextWrapper>
    </section>
  );
};

export default RunningText;
