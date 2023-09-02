import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3LightTheme as DefaultTheme, Button } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Routes } from './src/routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#770FDF',
    secondary: '#0FDF8F',
  },
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <Routes />
      </PaperProvider>
    </GestureHandlerRootView>
  );
}