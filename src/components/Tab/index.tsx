import React, { useCallback } from 'react';

import {Container, Button} from './styles';
import { Feather } from '@expo/vector-icons';

interface IProps {
  state: any;
  navigation: any;
}

export default function Tab({state, navigation}: IProps) {
  return (
    <Container>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;

        const dataTab: any = {
          icon: 'home',
        };

        if (route.name === 'Search') {
          dataTab.icon = 'search';
        }

        if (route.name === 'Categories') {
          dataTab.icon = 'grid';
        }

        if (route.name === 'Bookmarks') {
          dataTab.icon = 'bookmark';
        }

        if (route.name === 'Profile') {
          dataTab.icon = 'user';
        }

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const onPress = useCallback(() => {
          navigation.navigate(route.name);
        }, [route]);

        return (
          <Button onPress={onPress} key={index}>
            <Feather
              name={dataTab.icon}
              color={isFocused ? '#475AD7' : '#ACAFC3'}
              size={26}
            />
          </Button>
        );
      })}
    </Container>
  );
}