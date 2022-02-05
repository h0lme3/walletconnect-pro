import styled from "styled-components";

export const ReadMoreBG = styled.div`
  background-color: #2b6cb0;
`;

export const ReadMoreWrapper = styled.div`
  padding: 8px 32px;
  display: flex;
  justify-content: center;
  @media (max-width: 424px) {
    flex-direction: column;
    align-items: center;
    padding: 8px 12px;
  }
`;

export const ReadMoreText = styled.div`
  color: #ffffff;
  margin-right: 8px;
  font-size: 14px;
  font-weight: 500;
`;

export const ReadMoreLink = styled.a`
  color: #ffffff;
  margin-left: 8px;
  font-size: 14px;
  text-decoration-line: underline;
`;
