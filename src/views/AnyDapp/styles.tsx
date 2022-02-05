import styled from "styled-components";

export const AnyDappWrapper = styled.div`
  padding: 64px 32px;
`;

export const AnyDappPart = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 64px 16px;
  @media (max-width: 860px) {
    flex-direction: column-reverse;
  }
`;

export const AnyDappLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 48px;
  @media (max-width: 786px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const AnyDappRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;

export const AnyDappTitle = styled.div`
  color: #2b6cb0;
  font-size: 48px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export const AnyDappContent = styled.div`
  max-width: 400px;
  font-size: 18px;
  color: #4a5568;
  @media (max-width: 860px) {
    max-width: 100%;
  }
`;

export const AnyDappSeeAllDapps = styled.a`
  display: flex;
  align-items: end;
  grid-gap: 8px;
  color: #2b6cb0;
  font-size: 20px;
  font-weight: 800;
`;
