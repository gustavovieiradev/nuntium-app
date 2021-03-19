import React from 'react';

import HeaderBack from '../../components/HeaderBack';
import { Container, Menu, ItemMenu, ItemName } from './styles';

export default function Language() {
  return (
    <Container>
      <HeaderBack title="Language" />

      <Menu>
        <ItemMenu>
          <ItemName>English</ItemName>
          {/* <Feather name="chevron-right" color="#666C8E" size={20} /> */}
        </ItemMenu>
        <ItemMenu>
          <ItemName>Turkish</ItemName>
          {/* <Feather name="chevron-right" color="#666C8E" size={20} /> */}
        </ItemMenu>
        <ItemMenu>
          <ItemName>German</ItemName>
          {/* <Feather name="chevron-right" color="#666C8E" size={20} /> */}
        </ItemMenu>
        <ItemMenu>
          <ItemName>Spanish</ItemName>
          {/* <Feather name="log-out" color="#666C8E" size={20} /> */}
        </ItemMenu>
      </Menu>

    </Container>
  )
}