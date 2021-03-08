import React from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Bottom, ButonSignin, ButtonForgot, Container, TextBottom, TextButtonSignin, TextForgot, ButtonSignup, TextButtonSignup } from './styles';

export function Signin() {
  return (
    <>
      <Container>
        <Header title="Welcome Back 👋" description="I am happy to see you again. You can continue where you left off by logging in" />
        <Input placeholder="Email address" iconLeft="mail"/>
        <Input placeholder="Password" iconLeft="lock"/>
        <ButtonForgot>
          <TextForgot>Forgot Password?</TextForgot>
        </ButtonForgot>
        <ButonSignin>
          <TextButtonSignin>Sign In</TextButtonSignin>
        </ButonSignin>
      </Container>
      <Bottom>
        <TextBottom>Already have an account?</TextBottom>
        <ButtonSignup>
          <TextButtonSignup> Sign In</TextButtonSignup>
        </ButtonSignup>
      </Bottom>
    </>
  );
}