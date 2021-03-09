import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 70px 20px 20px 20px;
`;

export const Bottom = styled.View`
  position: absolute;
  bottom: 30px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextBottom = styled.Text`
  color: #333647;
  font-size: 16px;
  font-family: 'OpenSans_400Regular';
`;

export const ButtonSignup = styled.TouchableOpacity`
`;

export const TextButtonSignup = styled.Text`
  color: #333647;
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
`;

export const ButtonNext = styled(RectButton)`
  background-color: #475AD7;
  height: 56px;
  border-radius: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

export const TextButtonNext = styled.Text`
  color: #fff;
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
`;