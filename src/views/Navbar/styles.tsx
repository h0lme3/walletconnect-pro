import styled from "styled-components";

export const NavbarWrapper = styled.div`
  padding: 16px 32px;
  border-bottom: 1px solid #e2e8f0;
  background-color: #ffffff;
`;

export const NavbarPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 860px) {
    align-items: end;
  }
`;

export const NavbarLinkPart = styled.div`
  display: flex;
  align-items: end;
  grid-gap: 32px;
`;

export const NavbarLogo = styled.div`
  width: 200px;
  height: 32px;
`;

export const NavbarTagGroup = styled.div`
  display: flex;
  grid-gap: 32px;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavbarTag = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #4a5568;
  cursor: pointer;
`;

export const NavbarAuth = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 32px;
  @media (max-width: 640px) {
    justify-content: end;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 32px;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const ShowHideMenu = styled.div`
  display: none;
  @media (max-width: 860px) {
    display: flex;
  }
`;

export const NavbarModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff80;
  backdrop-filter: blur(10px);
`;

export const NavbarModalWrapper = styled.div`
  padding: 56px 32px;
  @media (max-width: 426px) {
    padding: 70px 32px;
  }
`;

export const NavbarModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarModalBody = styled.div`
  padding-top: 64px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(1, minmax(0, 1fr));
`;

export const NavbarLogin = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
`;

export const NavbarLoginText = styled.div`
  font-size: 16px;
`;
