import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const AdvantagesSection = styled.section`
  padding-top: 26px;

  @media (min-width: 1440px) {
    padding-top: 43px;
  }
`;

export const AdvantagesCard = styled(motion.div)`
  border-radius: 24px;
  max-width: 345px;
  height: 1222px;
  background-color: black;
  padding: 4px 23px 0;

  @media (min-width: 1440px) {
    border-radius: 40px;
    max-width: 1360px;
    height: 593px;
    box-shadow: 0 4px 4px 9px rgba(0, 0, 0, 0.25);
    padding: 39px 72px 77px;
    display: flex;
    justify-content: space-between;
  }
`;

export const TitleCont = styled.div`
  margin-bottom: 32px;

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const AdvantagesTitle = styled.h2`
  font-weight: 600;
  font-size: 45px;
  color: #fff;
  line-height: 122%;
  margin-bottom: 45px;

  @media (min-width: 1440px) {
    max-width: 465px;
    font-size: 62px;
    margin-bottom: 76px;
  }
`;

export const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    font-weight: 600;
    color: #fff;
    line-height: 123%;
    font-size: 30px;
    position: relative;

    @media (min-width: 1440px) {
      font-size: 48px;
      &:not(:last-of-type)::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -20px;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #d9d9d9;
      }
      &:nth-of-type(2)::before {
        background-color: #d3f500;
      }
    }

    &:last-child {
      font-weight: 200;

      @media (min-width: 1440px) {
        font-weight: 100;
      }
    }
  }
`;

export const AdvantagesList = styled.ul`
  list-style: none;
  padding: 0;

  @media (min-width: 1440px) {
    max-width: 508px;
    display: flex;
    gap: 51px 39px;
    flex-wrap: wrap;
    align-items: baseline;
    align-self: flex-end;
    margin: 0;
  }
`;
