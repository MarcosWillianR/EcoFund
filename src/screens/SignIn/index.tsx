import { useCallback, useRef, useState } from 'react';
import { View, TextInput as NativeTextInput } from 'react-native';
import { Divider, Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../store/createStore';
import { signIn } from '../../store/modules/auth/authSlice';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import { Button } from '@components/Button';

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  const passwordRef = useRef<NativeTextInput>(null);

  const handleSubmit = useCallback(() => {
    dispatch(signIn());
  }, []);

  return (
    <SafeAreaView style={{ flex: 1,  }}>
      <Divider style={{ marginTop: 51, marginBottom: 20 }} />
     
      <Text variant="titleLarge" style={{ textAlign: 'center', fontWeight: '600' }}>Login</Text>

      <View style={{ marginHorizontal: 20, marginTop: 34 }}>
        <TextInput
          label="E-mail"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          returnKeyType="next"
          onSubmitEditing={() => passwordRef?.current?.focus()}
        />

        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
          right={<TextInput.Icon icon="eye" />}
          style={{ marginTop: 20, marginBottom: 32 }}
        />

        <Button mode="contained" onPress={handleSubmit}>Login</Button>

        <Button mode="text" textColor="#A0A0A0" onPress={() => navigation.navigate('signUp')}>
          Don't have an account? <Text style={{ textDecorationStyle: 'solid', textDecorationColor: '#A0A0A0', textDecorationLine: 'underline' }}>Sign up</Text> here
        </Button>
      </View>
    </SafeAreaView>
  );
}