import { useMemo, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { LineGraph } from 'react-native-graph';
import { Text, IconButton, Card } from 'react-native-paper';

import { generateRandomGraphData } from '../../data/GraphData';

import aspiraDAC from '@assets/funds_highlighted/AspiraDAC.png';
import aspiraDAC_logo from '@assets/funds_highlighted/AspiraDAC_logo.png';
import climeworks from '@assets/funds_highlighted/climeworks.png';
import climeworks_logo from '@assets/funds_highlighted/climeworks_logo.png';

import { DetailsHeader } from './components/DetailsHeader';
import { Button } from '@components/Button';

const POINT_COUNT = 40
const POINTS = generateRandomGraphData(POINT_COUNT)

const STATS_MOCK = [
  { 
    id: 1, 
    data: [
      { id: 1, title: 'AUM', value: '$430.88m' },
      { id: 2, title: 'Issue Date', value: '18/04/2022' },
    ]
  },
  { 
    id: 2, 
    data: [
      { id: 3, title: 'Vintage Range', value: '2019-2022' },
      { id: 4, title: 'TER', value: '0.15%' },
    ]
  },
  {
    id: 3, 
    data: [
      { id: 5, title: 'Price at Close', value: '$17.68' },
      { id: 6, title: 'Price at Open', value: '$17.74' },
    ]
  }
]

export function Details() {
  const [points, _] = useState(POINTS)
  const [value, setValue] = useState('1h')
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DetailsHeader /> 
      
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>
          <View>
            <Text variant="titleLarge" style={{ fontWeight: '600' }}>$18.23</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', right: 14, bottom: 10 }}>
              <IconButton icon="call-made" size={16} iconColor="#0FDF8F" />
              <Text style={{ color: '#0FDF8F', right: 14 }}>3.51% ($1.21)</Text>
            </View>
          </View>

          <Text variant="titleLarge" style={{ fontWeight: '600' }}>2022</Text>
        </View>

        <LineGraph
          style={{ width: '100%', aspectRatio: 1.4, marginBottom: 20 }}
          animated
          color="#0FDF8F"
          points={points}
        />

        <FlatList 
          data={[ '1h', '1d', '1w', '1m', '1y', 'All' ]}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          contentContainerStyle={{ marginHorizontal: 10 }}
          renderItem={({ item }) => (
            <Button 
              key={item} 
              style={{ borderRadius: 4 }} 
              onPress={() => setValue(item)} 
              buttonColor={item === value ? "#F7EFFF" : undefined}
              mode={item === value ? 'contained-tonal' : undefined}
              textColor="#770FDF" 
            >
              {item}
            </Button>
          )}
        />

        <View style={{ marginTop: 40 }}>
          <Text variant="titleLarge" style={{ fontWeight: '600', marginHorizontal: 20, marginBottom: 10 }}>
            Info & Stats
          </Text>
          
          {STATS_MOCK.map(stat => (
            <View key={stat.id} style={{ flexDirection: 'row', gap: 6 }}>
              {stat.data.map(({ id, title, value }) => (
                <View key={id} style={{ alignItems: 'center', gap: -8, flex: 1, marginHorizontal: 9 }}>
                  <Button icon="information-outline" textColor="#A0A0A0" style={{ marginRight: 'auto' }}>{title}</Button>
                  <Button style={{ marginRight: 'auto' }} textColor="#000">{value}</Button>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={{ marginTop: 40 }}>
          <Text variant="titleLarge" style={{ fontWeight: '600', marginHorizontal: 20, marginBottom: 10 }}>
            Fund Breakdown
          </Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            <View style={{ marginRight: 20 }}>
              <Text variant="titleMedium" style={{ fontWeight: '600' }}>Highlighted</Text>
              <View style={{ flex: 1, height: 2, backgroundColor: '#770FDF', marginTop: 9 }} />
            </View>

            <View style={{ marginRight: 20 }}>
              <Text variant="titleMedium" style={{ color: '#A0A0A0', fontWeight: '600' }}>Value</Text>
            </View>

            <View style={{ marginRight: 20 }}>
              <Text variant="titleMedium" style={{ color: '#A0A0A0', fontWeight: '600' }}>Vintage</Text>
            </View>

            <View style={{ marginRight: 20 }} >
              <Text variant="titleMedium" style={{ color: '#A0A0A0', fontWeight: '600' }}>Registry</Text>
            </View>
          </ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20, paddingLeft: 20 }}>
            <Card style={{ borderRadius: 4, width: 220, marginRight: 20 }}>
              <Card.Cover source={aspiraDAC} style={{ borderRadius: 4, height: 106 }} />
              <Card.Content style={{ borderRadius: 4, backgroundColor: '#fff' }} >
                <Image source={aspiraDAC_logo} style={{ marginVertical: 10 }} />
                <Text variant="bodySmall">Aspira is building a modular, direct air capture system with the energy supply integrated into the modules.</Text>
                <Text style={{ textDecorationColor: '#000', textDecorationStyle: 'solid', textDecorationLine: 'underline', marginTop: 10 }}>
                  Read more
                </Text>
              </Card.Content>
            </Card>

            <Card style={{ borderRadius: 4, width: 220, marginRight: 20 }}>
              <Card.Cover source={climeworks} style={{ borderRadius: 4, height: 106 }} />
              <Card.Content style={{ borderRadius: 4, backgroundColor: '#fff' }} >
                <Image source={climeworks_logo} style={{ marginVertical: 10 }} />
                <Text variant="bodySmall">uses renewable geothermal energy and waste heat to capture CO₂ directly from the air.</Text>
                <Text style={{ textDecorationColor: '#000', textDecorationStyle: 'solid', textDecorationLine: 'underline', marginTop: 10 }}>
                  Read more
                </Text>
              </Card.Content>
            </Card>
          </ScrollView>
        </View>

        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
          <Text variant="titleLarge" style={{ fontWeight: '600',  marginBottom: 10 }}>
            Your Portfolio
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text variant="headlineSmall" style={{ fontWeight: '800' }}>18 credits</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', right: 14, bottom: 10 }}>
                <IconButton icon="call-made" size={16} iconColor="#0FDF8F" />
                <Text style={{ color: '#0FDF8F', right: 14 }}>8.41%</Text>
              </View>
            </View>
            
            <View style={{ alignItems: 'flex-end' }}>
              <Text variant="headlineSmall" style={{ fontWeight: '800' }}>$328.14</Text>
              <Text style={{ color: '#A0A0A0' }}>Last purchase 28d ago</Text>
            </View>
          </View>
          
          <View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Button mode="outlined" style={{ flex: 1, borderRadius: 4 }}>Sell</Button>
              <Button mode="contained" buttonColor="#0FDF8F" style={{ flex: 1, borderRadius: 4 }}>Retire credits</Button>
            </View>

            <Text style={{ color: '#A0A0A0', marginTop: 16 }}>You've previously retired 28 credits of this asset</Text>
          </View>

          <View style={{ padding: 10, backgroundColor: '#F4F4F4', marginTop: 40, borderRadius: 4 }}>
            <Text style={{ color: '#A0A0A0' }}>Please note that prices are for reference only and may vary at the time of executing a buy or sell order.</Text>
            <Text style={{ color: '#A0A0A0' }}>The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets.</Text>
          </View>
          
          <View style={{ marginTop: 30  }}>
            <Button mode="contained">Buy</Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView> 
  );
}