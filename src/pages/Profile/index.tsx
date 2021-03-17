import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { Container, Email, ImgUser, Info, InfoData, Name, Menu, ItemMenu, ItemName } from './styles';

import userImg from '../../images/user.png';
import { Switch } from 'react-native';

export default function Profile() {
  return (
    <Container>
      <Header title="Profile" />

      <Info>
        <ImgUser source={userImg} />
        <InfoData>
          <Name>Eren Turkmen</Name>
          <Email>ertuken@gmail.com</Email>
        </InfoData>
      </Info>

      <Menu>
        <ItemMenu>
          <ItemName>Notifications</ItemName>
          <Switch 
            thumbColor="#fff" 
            trackColor={{ false: '#ccc', true: '#475AD7' }}
          />
        </ItemMenu>
        <ItemMenu>
          <ItemName>Language</ItemName>
          <Feather name="chevron-right" color="#666C8E" size={20} />
        </ItemMenu>
        <ItemMenu>
          <ItemName>Change Password</ItemName>
          <Feather name="chevron-right" color="#666C8E" size={20} />
        </ItemMenu>
        <ItemMenu>
          <ItemName>Privacy</ItemName>
          <Feather name="chevron-right" color="#666C8E" size={20} />
        </ItemMenu>
        <ItemMenu>
          <ItemName>Terms {"&"} Conditions</ItemName>
          <Feather name="chevron-right" color="#666C8E" size={20} />
        </ItemMenu>
        <ItemMenu>
          <ItemName>Sign Out</ItemName>
          <Feather name="log-out" color="#666C8E" size={20} />
        </ItemMenu>
      </Menu>

    </Container>
  )
};