import styled from '@emotion/styled';

export const Card = styled.div`
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 316px;
  height: 152px;
  background: linear-gradient(90deg, #faff00 35.84%, #9ae1c9 100%);
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    border-radius: 56px;
    max-width: 699px;
    width: 100%;
    height: 337px;
    margin-right: 39px;
    margin-bottom: 45px;
  }
`;

export const SocialMediaList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px 10px;
  max-width: 255px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    max-width: 530px;
    width: 100%;
  }
`;
