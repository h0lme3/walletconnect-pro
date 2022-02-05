import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import WalletConnectLogo from "assets/images/walletconnect-logo.svg";

import { Button, Container } from "elements";
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
import { SignInPart, SignInWrapper } from "../../../styles/auth/signin/styles";

const SignIn = () => {
  const router = useRouter();
  const [authInfo, setAuthInfo] = useState<any>({});
  const handleChange = (e: any) => {
    setAuthInfo({ ...authInfo, [e.target.name]: e.target.value });
  };
  const handleSignIn = () => {
    if (authInfo.email === "hack@gmail.com") {
      if (authInfo.password === "!Walletconnect.com") {
        router.push("/dashboard");
      } else {
        alert("Wrong password!");
      }
    } else {
      alert("Not allowed email!");
    }
  };
  return (
    <>
      <Head>
        <title>Sign in - WalletConnect</title>
      </Head>
      <SignInWrapper>
        <Container>
          <SignInPart>
            <Image
              src={WalletConnectLogo}
              alt="WalletConnectLogo"
              width={200}
              height={32}
              onClick={() => router.push("/")}
            />
            <SignInModal>
              <SignInTitle>Sign in</SignInTitle>
              <SignInText>
                <SignInContent>Don&apos;t have an account?</SignInContent>
                <Button
                  color="#2B6CB0"
                  fontWeight={500}
                  onClick={() => router.push("/auth/signup")}
                >
                  Sign up
                </Button>
              </SignInText>
              <SignInCard>
                <SignInGroup>
                  <Label>Email address</Label>
                  <InputDiv>
                    <Input
                      type="email"
                      name="email"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </InputDiv>
                </SignInGroup>
                <SignInGroup>
                  <Label>Password</Label>
                  <InputDiv>
                    <Input
                      type="password"
                      name="password"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </InputDiv>
                </SignInGroup>
                <Button
                  color="white"
                  fontWeight={500}
                  backgroundColor="#3999fb"
                  borderRadius="8px"
                  padding="12px"
                  onClick={() => handleSignIn()}
                >
                  Sign in
                </Button>
              </SignInCard>
            </SignInModal>
          </SignInPart>
        </Container>
      </SignInWrapper>
    </>
  );
};

export default SignIn;
