import React from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import {Container, Bottom, TextBottom, ButtonSignup, TextButtonSignup, ButtonNext, TextButtonNext} from './styles'

export default function ForgotPassword() {
  return(
    <>
      <Container>
        <Header 
          title="Forgot Password 🤔" 
          description="We need your email adress so we can send you the password reset code." 
        />
        <Input placeholder="Email address" iconLeft="mail"/>
        <ButtonNext>
          <TextButtonNext>Next</TextButtonNext>
        </ButtonNext>
      </Container>
      <Bottom>
        <TextBottom>Remember the password?</TextBottom>
        <ButtonSignup>
          <TextButtonSignup> Try again</TextButtonSignup>
        </ButtonSignup>
      </Bottom>
    </>
  );
}