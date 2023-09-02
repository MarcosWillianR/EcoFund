import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3LightTheme as DefaultTheme, Button } from 'react-native-paper';
import { View } from 'react-native';

import { SignIn } from '@screens/SignIn'

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
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />

      <SignIn />
    </PaperProvider>
  );
}