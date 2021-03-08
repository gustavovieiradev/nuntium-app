import React from 'react';
import { useFonts } from 'expo-font';
import { OpenSans_400Regular, OpenSans_600SemiBold, OpenSans_700Bold, OpenSans_800ExtraBold } from '@expo-google-fonts/open-sans';
import Routes from './src/routes/app.routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}
