import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import HomeSvg from '@assets/home.svg';
import TradeSvg from '@assets/trade.svg';
import PortfolioSvg from '@assets/portfolio.svg';

import { Home } from '@screens/Home'
import { Portfolio } from '@screens/Portfolio'
import { Trade } from '@screens/Trade'
import { Details } from '@screens/Details'

type AppRoutes = {
  home: undefined;
  trade: undefined;
  portfolio: undefined;
  details: {
    type: string;
  };
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#770FDF',
        tabBarInactiveTintColor: '#000000',
        tabBarStyle: {
          height: Platform.OS === "android" ? 'auto' : 96, 
          marginTop: -30
        }
      }}
    >
      <Screen 
        name="home" 
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeSvg fill={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Screen 
        name="trade" 
        component={Trade}
        options={{
          tabBarIcon: ({ color }) => <TradeSvg fill={color}/>,
          tabBarLabel: 'Trade',
        }} 
      />
      <Screen 
        name="portfolio" 
        component={Portfolio}
        options={{
          tabBarIcon: ({ color }) => <PortfolioSvg fill={color} />,
          tabBarLabel: 'Portfolio',
        }}
      />

      <Screen 
        name="details"
        component={Details}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}