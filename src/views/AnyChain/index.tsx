import React from "react";

import { AnythingCard, Container } from "elements";
import {
  AnyChainContent,
  AnyChainLeft,
  AnyChainPart,
  AnyChainRight,
  AnyChainTitle,
  AnyChainWrapper,
} from "./styles";
import { anychain } from "utils/anychain-data";

const AnyChain = () => {
  return (
    <AnyChainWrapper>
      <Container>
        <AnyChainPart>
          <AnyChainLeft>
            <AnyChainTitle>Any Chain</AnyChainTitle>
            <AnyChainContent>
              WalletConnect is chain agnostic and built to work with any
              blockchain. Developers can create multi-chain experiences and
              applications.
              <br />
              <br />
              More chains coming soon
            </AnyChainContent>
          </AnyChainLeft>
          <AnyChainRight>
            {anychain.map((item, index) => (
              <AnythingCard
                src={item.src}
                alt={item.alt}
                title={item.title}
                key={`anychain_${index}`}
              />
            ))}
          </AnyChainRight>
        </AnyChainPart>
      </Container>
    </AnyChainWrapper>
  );
};

export default AnyChain;
