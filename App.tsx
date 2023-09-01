import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, MD3LightTheme as DefaultTheme, Button } from 'react-native-paper';
import { View } from 'react-native';

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

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button icon="camera">
          Press me
        </Button>
      </View>
    </PaperProvider>
  );
}