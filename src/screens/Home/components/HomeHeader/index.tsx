import { View } from 'react-native';
import { Divider, Text, IconButton } from 'react-native-paper';

import { Button } from '@components/Button'

export function HomeHeader() {
  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20 }}>
        <IconButton icon="account-outline" mode="contained-tonal" />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text variant="bodyLarge" style={{ fontWeight: '600', left: 14 }}>Account: $1,457.23</Text>
          <IconButton icon="chevron-down" />
        </View>
        <IconButton icon="bell-outline" />
      </View>

      <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 16 }}>
        <View style={{ width: '100%' }}>
          <Text>Portfolio</Text>
        </View>

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 6 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text variant="titleLarge" style={{ fontWeight: '600' }}>$ 1,245.23</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', right: 14, bottom: 5 }}>
              <IconButton icon="call-made" size={16} iconColor="#0FDF8F" />
              <Text style={{ color: '#0FDF8F', right: 14 }}>31.82%</Text>
            </View>
          </View>

          <Button mode="contained-tonal" textColor="#770FDF" icon="seal" style={{ width: '40%', borderRadius: 4 }}>
            Earn Rewards
          </Button>
        </View>
      </View>
      <Divider style={{ marginTop: 30, marginBottom: 20 }} />
    </>
  )
}