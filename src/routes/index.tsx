import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = '#FFF';

  return (
    <NavigationContainer theme={theme}>
      <AuthRoutes />
    </NavigationContainer>
  )
}