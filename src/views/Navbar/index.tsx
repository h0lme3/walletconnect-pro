import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import WalletConnectLogo from "assets/images/walletconnect-logo.svg";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

import { Container, Button } from "elements";
import {
  ButtonGroup,
  NavbarAuth,
  NavbarLinkPart,
  NavbarLogin,
  NavbarLoginText,
  NavbarLogo,
  NavbarModal,
  NavbarModalBody,
  NavbarModalHeader,
  NavbarModalWrapper,
  NavbarPart,
  NavbarTag,
  NavbarTagGroup,
  NavbarWrapper,
  ShowHideMenu,
} from "./styles";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  return (
    <NavbarWrapper>
      <Container>
        <NavbarPart>
          <NavbarLinkPart>
            <NavbarLogo>
              <Image
                src={WalletConnectLogo}
                alt="WalletConnectLogo"
                width={200}
                height={32}
              />
            </NavbarLogo>
            <NavbarTagGroup>
              <NavbarTag>Docs</NavbarTag>
              <NavbarTag>Registry</NavbarTag>
            </NavbarTagGroup>
          </NavbarLinkPart>
          <NavbarAuth>
            <ButtonGroup>
              <Button onClick={() => router.push("/auth/signin")}>
                Log in
              </Button>
              <Button
                color="white"
                fontWeight={500}
                backgroundColor="#2B6CB0"
                borderRadius="99px"
                padding="8px 16px"
                onClick={() => router.push("/auth/signup")}
              >
                Sign up
              </Button>
            </ButtonGroup>
            <ShowHideMenu>
              <FiMenu size={24} onClick={() => setShowModal(true)} />
            </ShowHideMenu>
          </NavbarAuth>
        </NavbarPart>
        {showModal && (
          <NavbarModal>
            <NavbarModalWrapper>
              <NavbarModalHeader>
                <Image
                  src={WalletConnectLogo}
                  alt="WalletConnectLogo"
                  width={200}
                  height={32}
                />
                <FaTimes
                  color="#2B6CB0"
                  size={24}
                  onClick={() => setShowModal(false)}
                />
              </NavbarModalHeader>
              <NavbarModalBody>
                <NavbarTag>Docs</NavbarTag>
                <NavbarTag>Registry</NavbarTag>
                <Button
                  color="white"
                  fontWeight={500}
                  backgroundColor="#2B6CB0"
                  borderRadius="99px"
                  padding="8px 16px"
                  onClick={() => router.push("/auth/signup")}
                >
                  Sign up
                </Button>
                <NavbarLogin>
                  <NavbarLoginText>Have an account?</NavbarLoginText>
                  <Button
                    color="#2B6CB0"
                    fontWeight={500}
                    onClick={() => router.push("/auth/signin")}
                  >
                    Log in
                  </Button>
                </NavbarLogin>
              </NavbarModalBody>
            </NavbarModalWrapper>
          </NavbarModal>
        )}
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
