import React from "react";
import Image from "next/image";
import BlockchainSDKImg from "assets/images/blockchain-sdk.png";
import { BsCheckCircleFill } from "react-icons/bs";

import { Container } from "elements";
import {
  BlockchainSDKCard,
  BlockchainSDKContent,
  BlockchainSDKPart,
  BlockchainSDKText,
  BlockchainSDKTitle,
  BlockchainSDKWrapper,
  CardContent,
  CardTitle,
} from "./styles";
import { blockchainSdkData } from "utils/blockchain-sdk-data";

const BlockchainSDK = () => {
  return (
    <BlockchainSDKWrapper>
      <Container>
        <BlockchainSDKPart>
          <BlockchainSDKText>
            <BlockchainSDKTitle>The Blockchain SDK</BlockchainSDKTitle>
            <BlockchainSDKContent>
              Built for developers, the WalletConnect web, android, and iOS
              SDK’s power millions of web3 connections every day.
            </BlockchainSDKContent>
          </BlockchainSDKText>
          <Image
            src={BlockchainSDKImg}
            alt="Blockchain SDK"
            width={1216}
            height={422}
          />
          <BlockchainSDKCard>
            {blockchainSdkData.map((item, index) => (
              <div key={index}>
                <BsCheckCircleFill size={40} color="#2b6cb0" />
                <CardTitle>{item.title}</CardTitle>
                <CardContent>{item.content}</CardContent>
              </div>
            ))}
          </BlockchainSDKCard>
        </BlockchainSDKPart>
      </Container>
    </BlockchainSDKWrapper>
  );
};

export default BlockchainSDK;
