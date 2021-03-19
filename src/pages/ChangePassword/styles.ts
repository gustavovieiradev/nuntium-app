import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 70px 20px 20px 20px;
`;

export const Button = styled(RectButton)`
  background-color: #475AD7;
  height: 56px;
  border-radius: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
`;