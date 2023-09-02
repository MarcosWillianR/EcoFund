import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import homeMainBanner from '@assets/home-main-banner.png';

import { HomeHeader } from './components/HomeHeader';
import { Funds } from './components/Funds';

export function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* if you want a fixed header, just put the HomeHeader component above ScrollView. */}
        <HomeHeader /> 

        <Text variant="titleLarge" style={{ fontWeight: '600', marginHorizontal: 20 }}>Funds</Text>

        <Funds />

        <View style={{ marginHorizontal: 20, backgroundColor: '#770FDF', borderRadius: 10 }}>
          <Image source={homeMainBanner} />
        </View>

        <View style={{ flexDirection: 'row', gap: 16, marginHorizontal: 20, marginVertical: 20 }}>
          <View style={{ backgroundColor: '#F4F4F4', minHeight: 240, flex: 1, padding: 10, borderRadius: 10 }}>
            <Text>Why should you invest here?</Text>
          </View>
          <View style={{ backgroundColor: '#F4F4F4', minHeight: 240, flex: 1, padding: 10, borderRadius: 10 }} />
        </View>
      </ScrollView>
    </SafeAreaView> 
  );
}