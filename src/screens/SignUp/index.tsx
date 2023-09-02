import { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Divider, Text, TextInput, Checkbox, Snackbar, Portal, Dialog } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


import { Button } from '@components/Button'
import { ScrollView } from 'react-native-gesture-handler';

export function SignUp() {
  const navigation = useNavigation();
  const [warning, setWarning] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const onDismissSnackBar = useCallback(() => {
    setWarning(false)
  }, []);

  const handleSubmit = useCallback(() => {
    if (!acceptedTerms) {
      setWarning(true);
    } else {
      setRegisterSuccess(true);
    }
  }, [acceptedTerms]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider style={{ marginTop: 51, marginBottom: 20 }} />
      
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <Text variant="titleLarge" style={{ textAlign: 'center', fontWeight: '600' }}>Create your account</Text>

        <View style={{ marginTop: 34 }}>
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
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            style={{ marginTop: 20 }}
          />
          
          <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 32 }}>
            <Checkbox status={acceptedTerms ? "checked" : "unchecked"} onPress={() => setAcceptedTerms(state => !state)}/>
            <Text style={{ color: "#A0A0A0", maxWidth: '90%' }}>
              I am over 18 years of age and I have read and agree to the
              <Text>{` Terms of Service `}</Text> 
              and 
              <Text>{` Privacy Policy.`}</Text>
            </Text>
          </View>

          <Button mode="contained" onPress={handleSubmit}>Create account</Button>

          <Button mode="text" textColor="#A0A0A0" onPress={navigation.goBack}>
            Already have an account? 
            <Text style={{ textDecorationStyle: 'solid', textDecorationLine: 'underline' }}>
              {` Log in Here `}
            </Text>
          </Button>
        </View>
      </ScrollView>

      <Snackbar visible={warning} onDismiss={onDismissSnackBar}>
        To register, please accept the Terms of Service and Privacy Policy.
      </Snackbar>

      <Portal>
        <Dialog visible={registerSuccess} onDismiss={navigation.goBack}>
          <Dialog.Title>Success!</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">The account has created, now you can login.</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={navigation.goBack}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
}