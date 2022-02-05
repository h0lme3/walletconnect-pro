import React from "react";

import { Container } from "elements";
import {
  ReadMoreBG,
  ReadMoreLink,
  ReadMoreText,
  ReadMoreWrapper,
} from "./styles";

const ReadMore: React.FC = () => {
  return (
    <ReadMoreBG>
      <Container>
        <ReadMoreWrapper>
          <ReadMoreText>
            v2.0 Swift and Kotlin SDKs are now in Beta!
          </ReadMoreText>
          <ReadMoreLink
            href="https://medium.com/walletconnect/swift-and-kotlin-sdks-are-now-in-beta-436c72eb834f"
            target="_blank"
            rel="noopener"
          >
            Read more
          </ReadMoreLink>
        </ReadMoreWrapper>
      </Container>
    </ReadMoreBG>
  );
};

export default ReadMore;
