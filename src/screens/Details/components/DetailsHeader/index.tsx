import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Divider, Text, IconButton } from 'react-native-paper';

export function DetailsHeader() {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20 }}>
          <IconButton icon="arrow-left" size={28} onPress={() => navigation.goBack()} />

          <View style={{ alignItems: 'center' }}>
            <Text variant="titleMedium" style={{ fontWeight: '600' }}>Wind Fund</Text>
            <Text variant="titleSmall" style={{ fontWeight: '600', color: '#808080' }}>WFND</Text>
          </View>

          <IconButton icon="arrow-left" size={28} iconColor="transparent" />
        </View>

        <Divider style={{ marginTop: 10, marginBottom: 20 }} />
      </>
  )
}