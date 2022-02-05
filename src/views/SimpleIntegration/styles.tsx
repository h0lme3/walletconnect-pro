import styled from "styled-components";

export const SimpleIntegrationWrapper = styled.div`
  padding: 64px 32px;
`;

export const SimpleIntegrationPart = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 48px 16px;
  @media (max-width: 978px) {
    flex-direction: column-reverse;
  }
`;

export const SimpleIntegrationLeft = styled.div`
  background: #152d58;
  border-radius: 10px;
  padding: 16px;
  @media (max-width: 520px) {
    width: 100%;
    overflow-x: auto;
  }
`;

export const SimpleIntegrationCode = styled.pre`
  font-size: 14px;
`;

export const White = styled.span`
  color: #ffffff;
`;

export const OpaciyGreen = styled.span`
  color: #7fdbca;
`;

export const BoldGreen = styled.span`
  color: #addb67;
`;

export const Blue = styled.span`
  color: #82aaff;
`;

export const Purple = styled.span`
  color: #c792ea;
`;

export const SimpleIntegrationRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;

export const SimpleIntegrationTitle = styled.div`
  color: #2b6cb0;
  font-size: 48px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const SimpleIntegrationContent = styled.div`
  max-width: 560px;
  font-size: 18px;
  color: #4a5568;
`;

export const SimpleIntegrationReadDocs = styled.a`
  display: flex;
  align-items: end;
  grid-gap: 8px;
  color: #2b6cb0;
  font-size: 20px;
  font-weight: 800;
`;
