import styled from 'styled-components/native';

export const Container = styled.View`
  height: 70px;
  background: #fff;
  box-shadow: 0px -1px 0px rgba(172, 175, 195, 0.32);
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 40px;
  height: 100%;
`;