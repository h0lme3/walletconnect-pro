import React from "react";
import Image from "next/image";

import WalletConnectLogo from "assets/images/walletconnect-logo.svg";
import { BsGithub, BsTwitter, BsDiscord } from "react-icons/bs";

import { Button, Container } from "elements";
import { links, registry, resources, contract } from "utils/footer-data";
import {
  FooterWrapper,
  FooterPart,
  FooterAboutUsPart,
  FooterSocialPart,
  FooterSocialLeft,
  FooterSocialRight,
  FooterSocialMedia,
  SocialLink,
  FooterAboutUsLeft,
  FooterAboutUsRight,
  FooterAboutUsLink,
  Title,
  Link,
  Subscribe,
  Input,
  InputDiv,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterPart>
          <FooterAboutUsPart>
            <FooterAboutUsLeft>
              <FooterAboutUsLink>
                <Title>Links</Title>
                {links.map((item, index) => (
                  <Link key={`link_${index}`}>{item.title}</Link>
                ))}
              </FooterAboutUsLink>
              <FooterAboutUsLink>
                <Title>Registry</Title>
                {registry.map((item, index) => (
                  <Link key={`registry_${index}`}>{item.title}</Link>
                ))}
              </FooterAboutUsLink>
              <FooterAboutUsLink>
                <Title>Resources</Title>
                {resources.map((item, index) => (
                  <Link key={`resources_${index}`}>{item.title}</Link>
                ))}
              </FooterAboutUsLink>
              <FooterAboutUsLink>
                <Title>Contract</Title>
                {contract.map((item, index) => (
                  <Link key={`contract_${index}`}>{item.title}</Link>
                ))}
              </FooterAboutUsLink>
            </FooterAboutUsLeft>
            <FooterAboutUsRight>
              <Title>Subscribe to our newsletter!</Title>
              <Link>
                Be the first to learn the news about new features and product
                updates.
              </Link>
              <Subscribe>
                <InputDiv>
                  <Input type="email" placeholder="Join our newsletter" />
                </InputDiv>
                <Button
                  color="white"
                  fontWeight={600}
                  backgroundColor="#2B6CB0"
                  borderRadius="4px"
                  padding="10px 32px"
                >
                  Subscribe
                </Button>
              </Subscribe>
            </FooterAboutUsRight>
          </FooterAboutUsPart>
          <FooterSocialPart>
            <FooterSocialLeft>
              <Image
                src={WalletConnectLogo}
                alt="WalletConnectLogo"
                width={200}
                height={35}
              />
              <FooterSocialMedia>
                <SocialLink>
                  <BsGithub size={20} />
                </SocialLink>
                <SocialLink>
                  <BsTwitter size={20} />
                </SocialLink>
                <SocialLink>
                  <BsDiscord size={20} />
                </SocialLink>
              </FooterSocialMedia>
            </FooterSocialLeft>
            <FooterSocialRight>
              &copy; {new Date().getFullYear()} WalletConnect Inc
            </FooterSocialRight>
          </FooterSocialPart>
        </FooterPart>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
