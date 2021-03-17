import React from 'react';

import { Container, Description, Title } from './styles';

interface IProps {
  title: string;
  description?: string;
}

export function Header({description, title}: IProps) {
  return (
    <Container> 
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}