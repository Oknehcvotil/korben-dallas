import React from 'react';
import Icon from 'components/Icon/Icon';
import { RunningTextWrapper, RunningTextCont } from './RunningText.styled';
import Marquee from 'react-fast-marquee';
import useResize from 'hooks/useResize';

const RunningText = () => {
  const windowSize = useResize();
  const isDesktop = windowSize.width >= 1440;

  return (
    <section>
      <RunningTextWrapper>
        <Marquee autoFill={true}>
          {[...Array(3)].map((_, index) => (
            <RunningTextCont key={index} fill={index === 2 ? '#d3f500' : null}>
              <Icon
                width={isDesktop ? '52' : '23.78'}
                height={isDesktop ? '52' : '23.78'}
                iconName="#icon-star"
              />
              <span>Let's build your project</span>
            </RunningTextCont>
          ))}
        </Marquee>
      </RunningTextWrapper>
    </section>
  );
};

export default RunningText;
