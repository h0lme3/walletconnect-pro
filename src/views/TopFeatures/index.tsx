import React from "react";
import Image from "next/image";

import { Container } from "elements";
import {
  TopFeaturesCard,
  TopFeaturesCardContent,
  TopFeaturesCardGroup,
  TopFeaturesCardTitle,
  TopFeaturesContent,
  TopFeaturesPart,
  TopFeaturesTitle,
  TopFeaturesWrapper,
} from "./styles";
import { topFeaturesData } from "utils/top-features-data";

const TopFeatures = () => {
  return (
    <TopFeaturesWrapper>
      <Container>
        <TopFeaturesPart>
          <TopFeaturesTitle>Top Features</TopFeaturesTitle>
          <TopFeaturesContent>
            Rebuilt from the ground up, v2 was created with features for the
            next generation of blockchain applications.
          </TopFeaturesContent>
          <TopFeaturesCard>
            {topFeaturesData.map((item, index) => (
              <TopFeaturesCardGroup key={`topfeatures_${index}`}>
                <Image src={item.src} alt={item.alt} />
                <TopFeaturesCardTitle>{item.title}</TopFeaturesCardTitle>
                <TopFeaturesCardContent>{item.content}</TopFeaturesCardContent>
              </TopFeaturesCardGroup>
            ))}
          </TopFeaturesCard>
        </TopFeaturesPart>
      </Container>
    </TopFeaturesWrapper>
  );
};

export default TopFeatures;
