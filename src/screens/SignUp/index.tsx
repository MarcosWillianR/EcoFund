import { View } from 'react-native';
import { Divider, Text, TextInput, Checkbox } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@components/Button'
import { ScrollView } from 'react-native-gesture-handler';

export function SignUp() {
  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <Divider style={{ marginTop: 51, marginBottom: 20 }} />
      
      <ScrollView>
        <Text variant="titleLarge" style={{ textAlign: 'center', fontWeight: '600' }}>Create your account</Text>

        <View style={{ marginHorizontal: 20, marginTop: 34 }}>
          <TextInput
            label="First Name"
            mode="outlined"
          />

          <TextInput
            label="Last Name"
            mode="outlined"
            style={{ marginTop: 20 }}
          />

          <TextInput
            label="E-mail"
            mode="outlined"
            style={{ marginTop: 20 }}
          />

          <TextInput 
            label="Password"
            mode="outlined"
            style={{ marginTop: 20 }}
          />
          
          <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 32 }}>
            <Checkbox status="checked" />
            <Text style={{ color: "#A0A0A0", maxWidth: '90%' }}>
              I am over 18 years of age and I have read and agree to the
              <Text>{` Terms of Service `}</Text> 
              and 
              <Text>{` Privacy Policy.`}</Text>
            </Text>
          </View>

          <Button mode="contained">Create account</Button>

          <Button mode="text" textColor="#A0A0A0">
            Already have an account? 
            <Text style={{ textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>
              {` Log in Here `}
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}