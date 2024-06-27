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
import { LogInUser } from '../store/slices/LoginCredentials';
const LogIn = () => {
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

  const isValidEmail = email => {
    // Regular expression for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const navigation = useNavigation();
  const dispatch = useDispatch()
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
    console.log(text);
    setName(text);
  };
  const handlePassword = text => {
    console.log(text);
    setPassword(text);
  };
  const handleLogIn = async () => {
    try {
      console.log(email, passsword, name);

      const res = await dispatch(LogInUser({
        email,
        passsword,
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
        Login to your account
      </Text>
      <Text style={{ fontSize: 20, fontWeight: '300' }}>
        Its great to see you again
      </Text>
      <View>
        <View style={{ marginVertical: 20 }}>
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
      <Text
        style={{
          color: '#1A1A1A',
          fontSize: 16,
          fontWeight: '400',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        Forgot your password?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={{ textDecorationLine: 'underline', fontWeight: '600' }}>
            Reset your password
          </Text>
        </TouchableOpacity>
      </Text>
      <TouchableOpacity onPress={handleLogIn}>
        <Text
          style={{
            width: '100%',
            color: '#ffffff',
            textAlign: 'center',
            backgroundColor: '#1A1A1A',
            paddingVertical: 18,
            fontSize: 17,
            borderRadius: 10,
            marginVertical: 15,
          }}>
          Log In
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          color: '#1A1A1A',
          fontWeight: '300',
          textAlign: 'center',
        }}>
        Don't have and account{' '}
        <Text style={{ textDecorationLine: 'underline', fontWeight: '700' }}>
          Join
        </Text>
      </Text>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({});
