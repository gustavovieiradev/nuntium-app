import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 70px 20px 20px 20px;
`;

export const Menu = styled.View`
  /* margin-top: 32px; */
`;

export const ItemMenu = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #F3F4F6;
  border-radius: 12px;
  padding: 16px 24px;
  margin-bottom: 16px;
  height: 56px;
`;

export const ItemName = styled.Text`
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
  color: #666C8E;
`;