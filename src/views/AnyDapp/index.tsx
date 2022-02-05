import { AnythingCard, Container } from "elements";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { anydapp } from "utils/anydapp-data";

import {
  AnyDappContent,
  AnyDappLeft,
  AnyDappPart,
  AnyDappRight,
  AnyDappSeeAllDapps,
  AnyDappTitle,
  AnyDappWrapper,
} from "./styles";

const AnyDapp = () => {
  return (
    <AnyDappWrapper>
      <Container>
        <AnyDappPart>
          <AnyDappLeft>
            {anydapp.map((item, index) => (
              <AnythingCard
                src={item.src}
                alt={item.alt}
                title={item.title}
                key={`anydapp_${index}`}
              />
            ))}
          </AnyDappLeft>
          <AnyDappRight>
            <AnyDappTitle>Any Dapp</AnyDappTitle>
            <AnyDappContent>
              Hundreds of dapp’s use WalletConnect to connect with wallets. Give
              users the choice to use your dapp with their favorite wallet on
              any device. There is easy integration with our Javascript, Swift,
              or Kotlin SDK’s.
            </AnyDappContent>
            <AnyDappSeeAllDapps>
              See all dapps
              <FaLongArrowAltRight />
            </AnyDappSeeAllDapps>
          </AnyDappRight>
        </AnyDappPart>
      </Container>
    </AnyDappWrapper>
  );
};

export default AnyDapp;
