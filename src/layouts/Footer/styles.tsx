import styled from "styled-components";

export const FooterWrapper = styled.div``;

export const FooterPart = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 64px;
  padding: 80px 32px;
`;

export const FooterAboutUsPart = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1140px) {
    flex-direction: column;
    grid-gap: 48px;
  }
`;

export const FooterAboutUsLeft = styled.div`
  display: flex;
  grid-gap: 60px 84px;
  @media (max-width: 1140px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 426px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const FooterAboutUsLink = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const FooterAboutUsRight = styled.div`
  max-width: 420px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  @media (max-width: 1140px) {
    max-width: 450px;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Link = styled.a`
  font-size: 14px;
`;

export const Subscribe = styled.div`
  display: flex;
  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

export const InputDiv = styled.div`
  width: 368px;
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

export const FooterSocialPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    grid-gap: 32px;
  }
`;

export const FooterSocialLeft = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 12px 40px;
  @media (max-width: 768px) {
    align-self: start;
  }
  @media (max-width: 428px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
`;

export const SocialLink = styled.div`
  padding: 6px 8px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.08);
`;

export const FooterSocialRight = styled.div`
  font-size: 14px;
  @media (max-width: 768px) {
    align-self: end;
  }
`;
