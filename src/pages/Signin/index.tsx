import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Bottom, ButonSignin, ButtonForgot, Container, TextBottom, TextButtonSignin, TextForgot, ButtonSignup, TextButtonSignup } from './styles';

export default function Signin() {
  const { navigate } = useNavigation();

  const handleGoForgotPassword = useCallback(() => {
    navigate('ForgotPassword');
  }, []);

  return (
    <>
      <Container>
        <Header title="Welcome Back 👋" description="I am happy to see you again. You can continue where you left off by logging in" />
        <Input placeholder="Email address" iconLeft="mail"/>
        <Input placeholder="Password" iconLeft="lock"/>
        <ButtonForgot onPress={handleGoForgotPassword}>
          <TextForgot>Forgot Password?</TextForgot>
        </ButtonForgot>
        <ButonSignin>
          <TextButtonSignin>Sign In</TextButtonSignin>
        </ButonSignin>
      </Container>
      <Bottom>
        <TextBottom>Don't have an account?</TextBottom>
        <ButtonSignup>
          <TextButtonSignup> Sign Up</TextButtonSignup>
        </ButtonSignup>
      </Bottom>
    </>
  );
}