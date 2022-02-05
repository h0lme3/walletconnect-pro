import styled from "styled-components";

export const BlockchainSDKWrapper = styled.div`
  margin-top: 32px;
  padding: 16px 32px;
`;

export const BlockchainSDKPart = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 32px;
`;

export const BlockchainSDKText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlockchainSDKTitle = styled.div`
  color: #2b6cb0;
  font-size: 48px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const BlockchainSDKContent = styled.div`
  max-width: 520px;
  margin-top: 16px;
  font-size: 18px;
  color: #4a5568;
`;

export const BlockchainSDKCard = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  grid-gap: 24px 16px;
  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const CardTitle = styled.div`
  margin-top: 28px;
  font-size: 20px;
  font-weight: 800;
  color: #2b6cb0;
`;

export const CardContent = styled.div`
  margin-top: 4px;
  max-width: 286px;
  font-size: 16px;
  color: #4a5568;
  @media (max-width: 1020px) {
    max-width: 100%;
  }
`;
