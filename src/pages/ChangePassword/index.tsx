import React from 'react';

import HeaderBack from '../../components/HeaderBack';
import { Input } from '../../components/Input';
import { Button, Container, TextButton } from './styles';

export default function ChangePassword() {
  return (
    <Container>
      <HeaderBack title="Change Password" />
      <Input placeholder="Current Password" iconLeft="lock"/>
      <Input placeholder="New Password" iconLeft="lock"/>
      <Input placeholder="Repeat New Password" iconLeft="lock"/>

      <Button>
        <TextButton>Change Password</TextButton>
      </Button>

    </Container>
  )
}