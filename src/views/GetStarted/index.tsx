import React from "react";
import Image from "next/image";
import Illustration from "assets/images/illustration.png";

import { Button, Container } from "elements";
import {
  GetStartedContent,
  GetStartedLeft,
  GetStartedPart,
  GetStartedRight,
  GetStartedTitle,
  GetStartedWrapper,
} from "./styles";

const GetStarted = () => {
  return (
    <GetStartedWrapper>
      <Container>
        <GetStartedPart>
          <GetStartedLeft>
            <GetStartedTitle>
              Any Wallet.
              <br /> Any Dapp.
              <br /> Any Chain.
            </GetStartedTitle>
            <GetStartedContent>
              WalletConnect is the web3 standard to connect blockchain wallets
              to dapps.
            </GetStartedContent>
            <Button
              color="white"
              fontWeight={500}
              backgroundColor="#2b6cb0"
              borderRadius="10px"
              padding="16px 64px"
            >
              Get Started
            </Button>
          </GetStartedLeft>
          <GetStartedRight>
            <Image
              src={Illustration}
              alt="Illustration"
              width={560}
              height={378}
            />
          </GetStartedRight>
        </GetStartedPart>
      </Container>
    </GetStartedWrapper>
  );
};

export default GetStarted;
