import styled from '@emotion/styled';

export const HeroSection = styled.section`
  padding-top: 33px;
  padding-bottom: 35px;
`;

export const HeroTitleCont = styled.div`
  position: relative;
  min-height: 256px;
  margin-bottom: 13px;
`;

export const DesignRectangle = styled.div`
  position: absolute;
  top: 183px;
  right: -62px;
  border-radius: 32px;
  width: 92px;
  height: 32px;
  background: #d9d9d9;
`;

export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  max-width: 286px;
`;

export const Logo = styled.a`
  display: inline-block;
  line-height: 110%;
  color: #000;
  font-weight: 600;
  font-size: 64px;
  max-width: 286px;
  margin-bottom: 39px;
  position: relative;

  svg {
    fill: #00f5a0;
    position: absolute;
    right: -15px;
    bottom: 45px;
  }
`;

export const DigitalOpportunities = styled.p`
  margin-bottom: 6px;
`;

export const VideoCont = styled.div`
  border-radius: 40px;
  max-width: 343px;
  height: 535px;
  background: #d3f500;
  margin-bottom: 5px;
  padding: 7px 10px;
`;

export const Video = styled.img`
  border-radius: 30px;
  max-width: 323px;
  height: 522px;
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
`;
