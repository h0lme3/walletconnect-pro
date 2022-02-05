import styled from "styled-components";

export const AnythingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 12px;
`;

export const AnythingCardImg = styled.div`
  img {
    border-radius: 50px;
  }
  @media (max-width: 860px) {
    width: 75px;
    height: 75px;
  }
`;

export const AnythingCardContent = styled.div`
  max-width: 140px;
  font-size: 12px;
  font-weight: bold;
  color: #3a77ff;
`;
