import styled, { css } from 'styled-components/native';

interface PropsTag {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 70px 20px 20px 20px;
`;

export const Tags = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.TouchableOpacity<PropsTag>`
  padding: 8px 16px;
  background-color: #F3F4F6;
  border-radius: 16px;
  margin-right: 16px;

  ${(props) =>
    props.active &&
    css`
      background-color: #475AD7;
  `}

`

export const TagText = styled.Text<PropsTag>`
  font-family: 'OpenSans_600SemiBold';
  color: #7C82A1;
  font-size: 12px;

  ${(props) =>
    props.active &&
    css`
      color: #fff;
  `}
`

export const Banner = styled.ScrollView`
  margin-top: 25px;
  border-radius: 20px;
`;

export const BannerItem = styled.View`
  margin-right: 20px;
  border-radius: 20px;
`;

export const BannerImage = styled.Image`
  height: 256px;
  width: 256px;
  border-radius: 20px;
`;

export const AddBookmark = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  right: 24px;
`;

export const BoxData = styled.View`
  position: absolute;
  bottom: 40px;
  left: 24px;
  right: 24px;
`;

export const BoxTag = styled.Text`
  color: #F3F4F6;
  font-size: 12px;
  font-family: 'OpenSans_400Regular';
  text-transform: uppercase;
`;

export const BoxTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'OpenSans_600SemiBold';
`;

export const BoxRecommended = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;
`;

export const Title = styled.Text`
  color: #333647;
  font-size: 20px;
  font-family: 'OpenSans_600SemiBold';
`;

export const SubTitle = styled.Text`
  font-family: 'OpenSans_400Regular';
  font-size: 14px;
  color: #7C82A1;
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