import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../../components/Header';

import { Container, News, NewsItem, NewsImage, NewsData, NewsTag, NewsTitle } from './styles';

import imgList from '../../images/imgList1.png';

export default function Bookmarks() {
  return (
    <Container>
      <Header title="Bookmarks" description="Saved articles to the library" />
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
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
};