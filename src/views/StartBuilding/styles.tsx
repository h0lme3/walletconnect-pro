import styled from "styled-components";

export const StartBuildingWrapper = styled.div`
  padding: 144px 32px;
  @media (max-width: 768px) {
    padding: 96px 24px 24px 24px;
  }
`;

export const StartBuildingPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
`;

export const StartBuildingSubTitle = styled.div`
  font-size: 16px;
  color: #2b6cb0;
  font-weight: 700;
`;

export const StartBuildingTitle = styled.div`
  font-size: 48px;
  color: #2b6cb0;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const StartBuildingContent = styled.div`
  max-width: 640px;
  font-size: 16px;
  color: #4a5568;
  text-align: center;
`;

export const StartBuildingButtonGroup = styled.div`
  display: flex;
  grid-gap: 16px;
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
