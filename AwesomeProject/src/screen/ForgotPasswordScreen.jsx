import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Header from '../components/Header';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import userContext from '../Context/userContext';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [invalidInput, setInvalidInput] = useState(false);
  const [name, setName] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [passsword, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const capitalizeString = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const {userInfo, setUserInfo} = useContext(userContext);
  const navigation = useNavigation();
  const [isVisible, setIsvisible] = useState(false);
  const [validationText, setValidationText] = useState('');
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
  const handleNavigation = () => {
    if (email === userInfo.user.email) {
      navigation.navigate('ResetPassword');
    } else if (email) {
      setIsvisible(true);
      setValidationText('Please enter a valid email');
    } else {
      setIsvisible(true);
      setValidationText('Please enter email');
    }
  };
  const renderModal = () => {
    return (
      <Modal visible={isVisible} transparent={true} animationType="slide" delay>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            paddingHorizontal: 20,
            // Set background color to transparent
          }}>
          <View
            style={{
              height: '45%',
              width: '100%',
              borderRadius: 20,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 20,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign
              name={'exclamationcircleo'}
              size={80}
              style={{color: '#ED1010'}}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                color: '#1A1A1A',
                marginVertical: 10,
              }}>
              Validation failed
            </Text>
            <Text style={{color: '#808080', fontSize: 18, fontWeight: '400'}}>
              {validationText}{' '}
            </Text>
            <TouchableOpacity
              style={{width: '100%'}}
              onPress={() => setIsvisible(!isVisible)}>
              <Text
                style={{
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  paddingVertical: 15,
                  fontSize: 17,
                  fontWeight: '500',
                  borderRadius: 5,
                  marginVertical: 10,
                  borderWidth: 1,
                  borderColor: '#CCCCCC',
                }}>
                Try again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name={'arrow-back'}
          size={25}
          style={{marginTop: 20, color: '#1A1A1A'}}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          color: '#1A1A1A',
          fontWeight: '700',
          marginTop: 20,
        }}>
        Forgot password
      </Text>
      <Text style={{fontSize: 16, fontWeight: '300'}}>
        Enter your email for the verification process.
      </Text>
      {/* <Text style={{fontSize: 16, fontWeight: '300'}}>
        We will send 4-digit code to your email
      </Text> */}
      <View>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, color: '#1A1A1A', marginBottom: 7}}>
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
                style={[{color: '#ED1010'}, email === '' && {display: 'none'}]}
              />
            ) : (
              <AntDesign
                name={'checkcircleo'}
                size={20}
                style={[{color: '#0C9409'}, email === '' && {display: 'none'}]}
              />
            )}
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={handleNavigation}>
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
          Proceed
        </Text>
      </TouchableOpacity>
      {renderModal()}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
