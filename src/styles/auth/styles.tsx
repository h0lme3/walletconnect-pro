import styled from "styled-components";

export const SignInModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 16px;
`;

export const SignInTitle = styled.div`
  font-size: 36px;
  font-weight: 800;
  color: #1a202c;
`;

export const SignInText = styled.div`
  display: flex;
  grid-gap: 4px;
`;

export const SignInContent = styled.div`
  font-weight: 500;
`;

export const SignInCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  margin-top: 16px;
  padding: 32px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 1px #ccc;
`;

export const SignInGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #1a202c;
`;

export const InputDiv = styled.div`
  width: 307px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  @media (max-width: 426px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  &:focus {
    border: 1px solid #3182ce;
    outline: 1px solid #3182ce;
  }
  font-size: 14px;
  height: 100%;
  width: 100%;
  padding: 0 16px;
`;
