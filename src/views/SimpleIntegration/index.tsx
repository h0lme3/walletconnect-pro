import React from "react";

import { FaLongArrowAltRight } from "react-icons/fa";

import { Container } from "elements";
import {
  Blue,
  BoldGreen,
  OpaciyGreen,
  Purple,
  SimpleIntegrationCode,
  SimpleIntegrationContent,
  SimpleIntegrationLeft,
  SimpleIntegrationPart,
  SimpleIntegrationReadDocs,
  SimpleIntegrationRight,
  SimpleIntegrationTitle,
  SimpleIntegrationWrapper,
  White,
} from "./styles";

const SimpleIntegration = () => {
  return (
    <SimpleIntegrationWrapper>
      <Container>
        <SimpleIntegrationPart>
          <SimpleIntegrationLeft>
            <SimpleIntegrationCode>
              <div>
                <OpaciyGreen>import </OpaciyGreen>
                <White>WalletConnectClient </White>
                <OpaciyGreen>from</OpaciyGreen>
                <BoldGreen>"@walletconnect/client"</BoldGreen>
                <Purple>;</Purple>
              </div>
              <br />
              <div>
                <OpaciyGreen>const</OpaciyGreen> <White>client</White>{" "}
                <OpaciyGreen>= await </OpaciyGreen>
                <BoldGreen>WalletConnectClient</BoldGreen>
                <Purple>.</Purple>
                <Blue>init</Blue>
                <Purple>{`({`}</Purple>
              </div>
              <div>
                <White>{`  `}projectId</White>
                <OpaciyGreen>: </OpaciyGreen>
                <BoldGreen>"c4f79cc821944d9680842e34466bfbd"</BoldGreen>
              </div>
              <div>
                <Purple>{`});`}</Purple>
              </div>
            </SimpleIntegrationCode>
          </SimpleIntegrationLeft>
          <SimpleIntegrationRight>
            <SimpleIntegrationTitle>Simple Integration</SimpleIntegrationTitle>
            <SimpleIntegrationContent>
              WalletConnect can be integrated with just a few lines of code.
              SDKs available for Javascript, iOS/Swift, and Android/Kotlin.
            </SimpleIntegrationContent>
            <SimpleIntegrationReadDocs>
              Read the docs
              <FaLongArrowAltRight />
            </SimpleIntegrationReadDocs>
          </SimpleIntegrationRight>
        </SimpleIntegrationPart>
      </Container>
    </SimpleIntegrationWrapper>
  );
};

export default SimpleIntegration;
