import styled from "styled-components";

export const GetStartedWrapper = styled.div`
  padding: 96px 32px;
  @media (max-width: 768px) {
    padding: 48px 24px;
  }
`;

export const GetStartedPart = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GetStartedLeft = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const GetStartedTitle = styled.div`
  color: #2b6cb0;
  font-size: 60px;
  font-weight: 800;
  line-height: 1em;
  @media (max-width: 768px) {
    font-size: 46px;
  }
`;

export const GetStartedContent = styled.p`
  margin-bottom: 30px;
  max-width: 402px;
  color: #4a5568;
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
`;

export const GetStartedRight = styled.div`
  @media (max-width: 1040px) {
    display: none;
  }
`;
