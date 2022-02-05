import styled from "styled-components";

export const TopFeaturesWrapper = styled.div`
  padding: 0 32px;
`;

export const TopFeaturesPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopFeaturesTitle = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: #2b6cb0;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const TopFeaturesContent = styled.div`
  max-width: 480px;
  margin-top: 16px;
  font-size: 16px;
  text-align: center;
`;

export const TopFeaturesCard = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 96px 48px;
  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const TopFeaturesCardGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 8px;
`;

export const TopFeaturesCardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const TopFeaturesCardContent = styled.div`
  max-width: 320px;
  font-size: 16px;
  text-align: center;
`;
