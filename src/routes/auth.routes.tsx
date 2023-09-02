import { View } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { SignIn } from '@screens/SignIn'
import { SignUp } from '@screens/SignUp'

type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
}

export type AuthNavigatorRoutesProps = StackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="signIn" component={SignIn} />
        <Screen name="signUp" component={SignUp} />
      </Navigator>
    </View>
  );
}