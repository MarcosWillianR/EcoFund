import { View } from 'react-native';
import { Divider, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@components/Button'

export function SignIn() {
  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <Divider style={{ marginTop: 51, marginBottom: 20 }} />
     
      <Text variant="titleLarge" style={{ textAlign: 'center', fontWeight: '600' }}>Login</Text>

      <View style={{ marginHorizontal: 20, marginTop: 34 }}>
        <TextInput
          label="E-mail"
          mode="outlined"
        />

        <TextInput
          label="Password"
          mode="outlined"
          style={{ marginTop: 20, marginBottom: 32 }}
        />

        <Button mode="contained">Login</Button>

        <Button mode="text" textColor="#A0A0A0">
          Don't have an account? <Text style={{ textDecorationStyle: 'solid', textDecorationColor: '#A0A0A0', textDecorationLine: 'underline' }}>Sign up</Text> here
        </Button>
      </View>
    </SafeAreaView>
  );
}