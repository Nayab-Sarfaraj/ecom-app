import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser } from '../store/slices/LoginCredentials';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [name, setName] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [passsword, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const isLoggedIn = useSelector(state => state.LoginCredentials.isLoggedIn)
  const capitalizeString = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const isValidEmail = email => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleEmail = text => {
    // console.log(text);
    // const newText = text.toUpperCase();
    // console.log(newText);
    // if (text === capitalizeString(text)) {
    //   setInvalidEmail(true);
    // }
    // if (text === newText) {
    //   setInvalidEmail(true);
    // }
    // if (!text.endsWith('@gmail.com')) {
    //   setInvalidEmail(true);
    // }
    // setEmail(text)
    setInvalidEmail(isValidEmail(text));
    setEmail(text);
  };
  const handleName = text => {
    setName(text);
  };
  const handlePassword = text => {
    setPassword(text);
  };
  const handleSignUp = async () => {
    try {


      const res = await dispatch(RegisterUser({
        email,
        passsword,
        name,
      }))
      const data = res.payload;


      if (isLoggedIn || data.success) {

        navigation.navigate('Account');
      }
    } catch (error) {
      console.log('register form error ', error);
    }
  };
  return (
    <View style={{ paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1 }}>
      <Text
        style={{
          fontSize: 30,
          color: '#1A1A1A',
          fontWeight: '700',
          marginTop: 20,
        }}>
        Create an account
      </Text>
      <Text style={{ fontSize: 20, fontWeight: '300' }}>
        Let's create your account
      </Text>
      <View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 20, color: '#1A1A1A', marginBottom: 7 }}>
            Full Name
          </Text>
          <View
            style={[
              {
                borderColor: '#E6E6E6',
                borderWidth: 2,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
              },
            ]}>
            <TextInput
              placeholder="Enter your full name"
              style={{
                fontSize: 17,

                color: '#E6E6E6',
              }}
              value={name}
              onChangeText={handleName}
            />
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20, color: '#1A1A1A', marginBottom: 7 }}>
            Email
          </Text>
          <View
            style={[
              {
                borderWidth: 2,
                // padding: 10,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                // borderColor: '#E6E6E6',
                justifyContent: 'space-between',
              },
              {
                borderColor: email
                  ? invalidEmail
                    ? '#ED1010'
                    : '#0C9409'
                  : '#E6E6E6',
              },
            ]}>
            <TextInput
              placeholder="Enter your email address"
              style={{
                fontSize: 17,

                color: '#E6E6E6',
              }}
              value={email}
              onChangeText={handleEmail}
            />
            {invalidEmail ? (
              <AntDesign
                name={'exclamationcircleo'}
                size={20}
                style={[{ color: '#ED1010' }, email === '' && { display: 'none' }]}
              />
            ) : (
              <AntDesign
                name={'checkcircleo'}
                size={20}
                style={[{ color: '#0C9409' }, email === '' && { display: 'none' }]}
              />
            )}
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 20, color: '#1A1A1A', marginBottom: 7 }}>
            Password
          </Text>
          <View
            style={[
              {
                borderWidth: 2,
                // padding: 10,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                justifyContent: 'space-between',
              },
              {
                borderColor: passsword
                  ? isValidPassword
                    ? '#ED1010'
                    : '#0C9409'
                  : '#E6E6E6',
              },
            ]}>
            <TextInput
              placeholder="Enter password"
              style={{
                fontSize: 17,

                color: '#E6E6E6',
              }}
              secureTextEntry={false}
              value={passsword}
              onChangeText={handlePassword}
            />
            {isValidPassword ? (
              <AntDesign
                name={'exclamationcircleo'}
                size={20}
                style={[
                  { color: '#ED1010' },
                  passsword === '' && { display: 'none' },
                ]}
              />
            ) : (
              <AntDesign
                name={'checkcircleo'}
                size={20}
                style={[
                  { color: '#0C9409' },
                  passsword === '' && { display: 'none' },
                ]}
              />
            )}
          </View>
        </View>
      </View>
      <Text style={{ color: '#1A1A1A', fontSize: 16, fontWeight: '400' }}>
        By signing up you will agree to our{' '}
        <Text style={{ textDecorationLine: 'underline', fontWeight: '600' }}>
          Terms,Privacy Policy
        </Text>
        and{' '}
        <Text style={{ textDecorationLine: 'underline', fontWeight: '600' }}>
          Coookies
        </Text>
      </Text>
      <TouchableOpacity onPress={handleSignUp}>
        <Text
          style={{
            width: '100%',
            color: '#FFFFFF',
            textAlign: 'center',
            backgroundColor: '#CCCCCC',
            paddingVertical: 18,
            fontSize: 17,
            borderRadius: 10,
            marginVertical: 15,
          }}>
          Create An Account
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          color: '#1A1A1A',
          fontWeight: '300',
          textAlign: 'center',
        }}>
        Already have a account?
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={{ textDecorationLine: 'underline', fontWeight: '700' }}>
            Log In
          </Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
