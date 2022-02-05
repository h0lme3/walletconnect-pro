import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import WalletConnectLogo from "assets/images/walletconnect-white-logo.svg";
import { BsCheckCircleFill } from "react-icons/bs";

import {
  Content,
  DeveloperCloud,
  SignUpLeft,
  SignUpRight,
  SignUpWrapper,
  Step,
  StepContent,
  StepGroup,
  Title,
} from "../../../styles/auth/signup/styles";
import {
  Input,
  InputDiv,
  Label,
  SignInCard,
  SignInContent,
  SignInGroup,
  SignInModal,
  SignInText,
  SignInTitle,
} from "styles/auth/styles";
import { Button } from "elements";

const SignUp = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Sign up - WalletConnect</title>
      </Head>
      <SignUpWrapper>
        <SignUpLeft>
          <Image
            src={WalletConnectLogo}
            alt="WalletConnectLogo"
            width={172}
            height={28}
            onClick={() => router.push("/")}
          />
          <DeveloperCloud>
            <Title>Developer Cloud</Title>
            <Content>
              Create a cloud account for relay server access, and manage your
              wallet or dapp registry listing.
            </Content>
            <Step>
              <StepGroup>
                <BsCheckCircleFill size={20} color="white" />
                <StepContent>For wallet and dapp developers</StepContent>
              </StepGroup>
              <StepGroup>
                <BsCheckCircleFill size={20} color="white" />
                <StepContent>Manage projects</StepContent>
              </StepGroup>
              <StepGroup>
                <BsCheckCircleFill size={20} color="white" />
                <StepContent>Manage registry listings</StepContent>
              </StepGroup>
            </Step>
          </DeveloperCloud>
        </SignUpLeft>
        <SignUpRight>
          <SignInModal>
            <SignInTitle>Sign up</SignInTitle>
            <SignInText>
              <SignInContent>Already have an account?</SignInContent>
              <Button
                color="#2B6CB0"
                fontWeight={500}
                onClick={() => router.push("/auth/signin")}
              >
                Sign in
              </Button>
            </SignInText>
            <SignInCard>
              <SignInGroup>
                <Label>Email</Label>
                <InputDiv>
                  <Input type="email" />
                </InputDiv>
              </SignInGroup>
              <SignInGroup>
                <Label>Password</Label>
                <InputDiv>
                  <Input type="password" />
                </InputDiv>
              </SignInGroup>
              <Button
                color="white"
                fontWeight={500}
                backgroundColor="#3182ce"
                borderRadius="8px"
                padding="12px"
                onClick={() => router.push("/signin")}
              >
                Create my account
              </Button>
            </SignInCard>
          </SignInModal>
        </SignUpRight>
      </SignUpWrapper>
    </>
  );
};

export default SignUp;
