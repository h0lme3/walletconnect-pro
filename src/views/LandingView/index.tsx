import React from "react";

import {
  GetStarted,
  BlockchainSDK,
  SimpleIntegration,
  TopFeatures,
  StartBuilding,
  AnyChain,
  AnyDapp,
  AnyWallet,
} from "views";

import { LandingViewWrapper } from "./styles";

const LandingView = () => {
  return (
    <LandingViewWrapper>
      <GetStarted />
      <BlockchainSDK />
      <SimpleIntegration />
      <AnyWallet />
      <AnyDapp />
      <AnyChain />
      <TopFeatures />
      <StartBuilding />
    </LandingViewWrapper>
  );
};

export default LandingView;
