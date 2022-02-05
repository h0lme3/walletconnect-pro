import React from "react";

import { Button, Container } from "elements";
import {
  StartBuildingButtonGroup,
  StartBuildingContent,
  StartBuildingPart,
  StartBuildingWrapper,
  StartBuildingSubTitle,
  StartBuildingTitle,
} from "./styles";
import { Title } from "layouts/Footer/styles";

const StartBuilding = () => {
  return (
    <StartBuildingWrapper>
      <Container>
        <StartBuildingPart>
          <StartBuildingSubTitle>For Developers</StartBuildingSubTitle>
          <StartBuildingTitle>Start Building</StartBuildingTitle>
          <StartBuildingContent>
            To quickly setup for your Dapp or Wallet, create a cloud account for
            relay server access, then check out our code examples and quick
            start guide.
          </StartBuildingContent>
          <StartBuildingButtonGroup>
            <Button
              color="white"
              fontWeight="bold"
              backgroundColor="#3182ce"
              borderRadius="10px"
              padding="14px 32px"
            >
              Get started
            </Button>
            <Button
              color="black"
              fontWeight="bold"
              backgroundColor="#edf2f7"
              borderRadius="10px"
              padding="14px 32px"
            >
              Read the docs
            </Button>
          </StartBuildingButtonGroup>
        </StartBuildingPart>
      </Container>
    </StartBuildingWrapper>
  );
};

export default StartBuilding;
