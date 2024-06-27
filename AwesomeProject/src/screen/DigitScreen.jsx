import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DigitScreen = () => {
  const [email, setEmail] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [name, setName] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [passsword, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [otp, setOtp] = useState(0);
  const capitalizeString = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
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
    console.log(text);
    setName(text);
  };
  const handlePassword = text => {
    console.log(text);
    setPassword(text);
  };
  return (
    <View style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1}}>
      <Ionicons
        name={'arrow-back'}
        size={25}
        style={{marginTop: 20, color: '#1A1A1A'}}
      />
      <Text
        style={{
          fontSize: 30,
          color: '#1A1A1A',
          fontWeight: '700',
          marginTop: 20,
        }}>
        Enter 4 Digit Code
      </Text>
      <Text style={{fontSize: 16, fontWeight: '300'}}>
        Enter your 4 digit code that you recieved on your email (xyz@gmail.com)
      </Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleOTPChange(text, 0)}
            value={otp[0]}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleOTPChange(text, 1)}
            value={otp[1]}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleOTPChange(text, 2)}
            value={otp[2]}
          />
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleOTPChange(text, 3)}
            value={otp[3]}
          />
        </View>
      </View>

      <Text
        style={{
          fontSize: 16,
          color: '#1A1A1A',
          fontWeight: '300',
          textAlign: 'center',
        }}>
        Email not recieved{' '}
        <Text style={{textDecorationLine: 'underline', fontWeight: '700'}}>
          Resend code
        </Text>
      </Text>
    </View>
  );
};

export default DigitScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});
