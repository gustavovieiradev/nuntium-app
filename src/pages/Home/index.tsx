import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Container, Tags, Tag, TagText, Banner, BannerImage, BannerItem, AddBookmark, BoxTitle, BoxData, BoxTag, BoxRecommended, SubTitle, News, NewsItem, NewsImage, NewsData, NewsTag, NewsTitle } from './styles';

import newsImg from '../../images/news1.png';
import imgList from '../../images/imgList1.png';
import { Title } from '../../components/Header/styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home() {
  return (
    <Container>
      <Header 
        title="Browse"
        description="Discover things of this world"
      />

      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Input placeholder="Search" iconLeft="search" />

        <Tags>
          <Tag active={true}>
            <TagText active={true}>Random</TagText>
          </Tag>
          <Tag>
            <TagText>Sports</TagText>
          </Tag>
          <Tag>
            <TagText>Gaming</TagText>
          </Tag>
          <Tag>
            <TagText>Policts</TagText>
          </Tag>
        </Tags>

        <View style={{ height: 286 }}>
          <Banner horizontal={true} showsHorizontalScrollIndicator={false}>
            <BannerItem>
              <BannerImage source={newsImg} />
              <AddBookmark>
                <Feather name="bookmark" color="#fff" size={26} />
              </AddBookmark>
              <BoxData>
                <BoxTag>Politics</BoxTag>
                <BoxTitle>The latest situation in the presidential election</BoxTitle>
              </BoxData>
            </BannerItem>
            <BannerItem>
              <BannerImage source={newsImg} />
              <AddBookmark>
                <Feather name="bookmark" color="#fff" size={26} />
              </AddBookmark>
              <BoxData>
                <BoxTag>Politics</BoxTag>
                <BoxTitle>The latest situation in the presidential election</BoxTitle>
              </BoxData>
            </BannerItem>
            <BannerItem>
              <BannerImage source={newsImg} />
              <AddBookmark>
                <Feather name="bookmark" color="#fff" size={26} />
              </AddBookmark>
              <BoxData>
                <BoxTag>Politics</BoxTag>
                <BoxTitle>The latest situation in the presidential election</BoxTitle>
              </BoxData>
            </BannerItem>
          </Banner>
        </View>

        <BoxRecommended>
          <Title>Recommended for you</Title>
          <SubTitle>See All</SubTitle>
        </BoxRecommended>

        <News>
          <NewsItem>
            <NewsImage source={imgList} />
            <NewsData>
              <NewsTag>UI/UX Design</NewsTag>
              <NewsTitle>A Simple Trick For Creating Color Palettes Quickly</NewsTitle>
            </NewsData>
          </NewsItem>
          <NewsItem>
            <NewsImage source={imgList} />
            <NewsData>
              <NewsTag>UI/UX Design</NewsTag>
              <NewsTitle>A Simple Trick For Creating Color Palettes Quickly</NewsTitle>
            </NewsData>
          </NewsItem>
          <NewsItem>
            <NewsImage source={imgList} />
            <NewsData>
              <NewsTag>UI/UX Design</NewsTag>
              <NewsTitle>A Simple Trick For Creating Color Palettes Quickly</NewsTitle>
            </NewsData>
          </NewsItem>
        </News>
      </ScrollView>

    </Container>
  )
}