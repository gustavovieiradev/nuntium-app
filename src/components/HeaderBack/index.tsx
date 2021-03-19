import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BackButton, Container, Title } from './styles';
import { useNavigation } from '@react-navigation/core';

interface IProps {
  title: string;
}

export default function HeaderBack({title}: IProps) {
  const { goBack } = useNavigation();

  return (
    <Container>
      <BackButton onPress={goBack}>
        <Feather name="arrow-left" color="#666C8E" size={20} />
      </BackButton>
      <Title>{title}</Title>
      <View>
      <Feather name="arrow-left" color="#fff" size={20} />
      </View>
    </Container>
  )
}