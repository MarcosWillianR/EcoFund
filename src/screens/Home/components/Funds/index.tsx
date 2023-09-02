import { View, Image } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';

const mockData = [
  {
    id: 1,
    name: 'Wind Fund',
    value: '$1032.23',
    percent: '3.51%',
    type: 'up',
    icon: require('@assets/wind.png'),
    graph: require('@assets/wind-fund-graph.png')
  },
  {
    id: 2,
    name: 'Solar Fund',
    value: '$986.61',
    percent: '0.13%',
    type: 'down',
    icon: require('@assets/sun.png'),
    graph: require('@assets/sun-fund-graph.png')
  },
  {
    id: 3,
    name: 'Natural Food',
    value: '$1122.52',
    percent: '42.51%',
    type: 'up',
    icon: require('@assets/natural-food.png'),
    graph: require('@assets/natural-food-fund-graph.png')
  },
]

export function Funds() {
  return (
    <FlatList 
      data={mockData}
      keyExtractor={item => item.id.toString()}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      renderItem={({ item }) => (
        <View style={{ padding: 12, borderStyle: 'solid', borderColor: '#E6E6E6', borderWidth: 1, borderRadius: 4 }}>
          <Image source={item.icon} />
          
          <Text variant="titleMedium" style={{ fontWeight: '600' }}>{item.name}</Text>
          
          <Image source={item.graph} style={{ marginTop: 14 }} />
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text variant="titleMedium" style={{ fontWeight: '600', marginTop: 9 }}>{item.value}</Text>
          
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconButton style={{ width: 14 }} icon={item.type === 'up' ? "call-made" : "arrow-bottom-right"} size={16} iconColor={item.type === 'up' ? "#0FDF8F" : "#EE8688"} />
              <Text style={{ color: item.type === 'up' ? '#0FDF8F' : '#EE8688' }}>{item.percent}</Text>
            </View>
          </View>
        </View>
      )}
    />
  )
}