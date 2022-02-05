import styled from "styled-components";

export const SignUpWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 860px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const SignUpLeft = styled.div`
  height: 100vh;
  background-color: #2b6cb0;
  padding: 30px;

  @media (max-width: 860px) {
    height: 60vh;
  }
`;

export const DeveloperCloud = styled.div`
  height: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 860px) {
    height: 50vh;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  font-weight: 800;
  color: white;
  @media (max-width: 920px) {
    font-size: 36px;
  }
  @media (max-width: 360px) {
    font-size: 30px;
  }
`;

export const Content = styled.div`
  max-width: 384px;
  margin-top: 16px;
  font-size: 16px;
  text-align: center;
  color: white;

  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export const Step = styled.div`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
`;

export const StepGroup = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 8px;
`;

export const StepContent = styled.div`
  font-size: 24px;
  color: white;
  @media (max-width: 920px) {
    font-size: 18px;
  }

  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

export const SignUpRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
`;
