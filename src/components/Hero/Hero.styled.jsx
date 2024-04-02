import styled from '@emotion/styled';

export const HeroSection = styled.section`
  padding-top: 33px;
  padding-bottom: 35px;

  @media (min-width: 1440px) {
    padding: 28px 0 51px;
  }
`;

export const HeroTitleCont = styled.div`
  position: relative;
  min-height: 256px;
  margin-bottom: 6px;

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const DesignRectangle = styled.div`
  position: absolute;
  top: 183px;
  right: -62px;
  border-radius: 32px;
  width: 92px;
  height: 32px;
  background: #d9d9d9;

  @media (min-width: 1440px) {
    top: -32px;
    right: -60px;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  max-width: 286px;

  @media (min-width: 1440px) {
    margin-bottom: 53px;
  }
`;

export const Logo = styled.a`
  display: inline-block;
  line-height: 110%;
  color: #000;
  font-weight: 600;
  font-size: 64px;
  margin-bottom: 52px;
  position: relative;

  svg {
    fill: #00f5a0;
    position: absolute;
    right: -15px;
    bottom: 45px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 83px;
  }
`;

export const DigitalOpportunities = styled.p`
  @media (min-width: 1440px) {
    margin-bottom: 32px;
    max-width: 469px;
  }
`;

export const VideoCard = styled.div`
  border-radius: 40px;
  max-width: 343px;
  height: 535px;
  background: #d3f500;
  margin-bottom: 5px;
  padding: 7px 10px;

  @media (min-width: 1440px) {
    border-radius: 30px;
    width: 860px;
    max-width: 100%;
    height: 595px;
    background: linear-gradient(180deg, #d3f500 0%, #fff 100%);
    padding: 13px 13px 50px;
  }
`;

export const VideoCont = styled.div`
  border-radius: 30px;
  max-width: 323px;
  height: 522px;
  overflow: hidden;

  @media (min-width: 1440px) {
    max-width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContactBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 3px;
  max-width: 348px;
  height: 54px;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  justify-content: center;
  border-radius: 56px;
  padding: 16px 24px;
  background: linear-gradient(90deg, #faff00 35.84%, #9ae1c9 100%);
  cursor: pointer;
  color: #000;

  @media (min-width: 1440px) {
    max-width: 222px;
  }
`;
