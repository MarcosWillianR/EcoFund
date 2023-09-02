import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useAppSelector } from '../store/createStore';
import { isAuthenticated } from '../store/modules/auth/authSlice';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
  const isAuth = useAppSelector(isAuthenticated);

  const theme = DefaultTheme;
  theme.colors.background = '#FFF';

  return (
    <NavigationContainer theme={theme}>
      {isAuth ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}