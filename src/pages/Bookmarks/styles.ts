import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 70px 20px 20px 20px;
`;

export const News = styled.View`
  margin-top: 25px;
`;

export const NewsItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 96px;
  margin-bottom: 16px;
`;

export const NewsImage = styled.Image``;

export const NewsTag = styled.Text`
  font-size: 14px;
  color: #7C82A1;
  font-family: 'OpenSans_400Regular';
`;

export const NewsTitle = styled.Text`
  color: #333647;
  font-size: 16px;
  font-family: 'OpenSans_600SemiBold';
  margin-top: 8px;
`;

export const NewsData = styled.View`
  flex: 1;
  flex-direction: column;
  margin-left: 15px;
`;