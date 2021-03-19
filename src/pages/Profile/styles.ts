import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 70px 20px 20px 20px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImgUser = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const InfoData = styled.View`
  flex-direction: column;
  margin-left: 24px;
`;

export const Name = styled.Text`
  font-family: 'OpenSans_600SemiBold';
  font-size: 16px;
  color: #333647;
`;

export const Email = styled.Text`
  font-family: 'OpenSans_400Regular';
  font-size: 14px;
  color: #7C82A1;
`;

export const Menu = styled.View`
  margin-top: 32px;
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