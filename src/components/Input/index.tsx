import React from 'react';
import { Feather } from '@expo/vector-icons';

import {Container, InputText} from './styles';

interface IProps<GLYPHS extends string> {
  iconLeft?: GLYPHS;
  iconRight?: GLYPHS;
  placeholder: string;
}

export function Input({iconLeft, iconRight, placeholder} : IProps<any>) {
  return (
    <Container>
      {iconLeft && <Feather name={iconLeft} color="#7C82A1" size={16} style={{marginRight: 15}} />} 
      <InputText placeholder={placeholder}/>
    </Container>
  );
}