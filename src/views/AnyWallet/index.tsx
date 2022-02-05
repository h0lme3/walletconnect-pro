import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

import { AnythingCard, Container } from "elements";
import {
  AnyWalletContent,
  AnyWalletLeft,
  AnyWalletPart,
  AnyWalletRight,
  AnyWalletSeeAllWallets,
  AnyWalletTitle,
  AnyWalletWrapper,
} from "./styles";
import { anywallet } from "utils/anywallet-data";

const AnyWallet = () => {
  return (
    <AnyWalletWrapper>
      <Container>
        <AnyWalletPart>
          <AnyWalletLeft>
            <AnyWalletTitle>Any Wallet</AnyWalletTitle>
            <AnyWalletContent>
              WalletConnect is built into more than 75 leading wallets. Easily
              integrate WalletConnect into your wallet with our Javascript,
              Swift, or Kotlin SDK’s.
            </AnyWalletContent>
            <AnyWalletSeeAllWallets>
              See all wallets
              <FaLongArrowAltRight />
            </AnyWalletSeeAllWallets>
          </AnyWalletLeft>
          <AnyWalletRight>
            {anywallet.map((item, index) => (
              <AnythingCard
                src={item.src}
                alt={item.alt}
                title={item.title}
                key={`anywallet_${index}`}
              />
            ))}
          </AnyWalletRight>
        </AnyWalletPart>
      </Container>
    </AnyWalletWrapper>
  );
};

export default AnyWallet;
