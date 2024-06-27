import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header';
import userContext from '../Context/userContext';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const MyDetails = () => {
  const {userInfo, setUserInfo} = useContext(userContext);
  console.log(userInfo);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  // const [user, setUser] = useState('');
  const handleProfileUpdate = () => {
    try {
    } catch (error) {
      console.log('this is update profile error ', error);
    }
  };
  useEffect(() => {
    if (userInfo && userInfo.user) {
      setEmail(userInfo.user.email);
      setName(userInfo.user.name);
    }
  }, []);
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1, paddingHorizontal: 20}}>
      <Header text={'My Details'} />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <MaterialCommunityIcons
          name={'account-circle-outline'}
          size={120}
          style={{color: '#1A1A1A'}}
        />
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#1A1A1A',
              marginBottom: 10,
            }}>
            Name
          </Text>
          <TextInput
            value={name}
            style={{
              fontSize: 18,
              borderColor: '#E6E6E6',
              borderWidth: 2,
              borderRadius: 7,
              marginBottom: 20,
              paddingLeft: 10,
            }}></TextInput>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#1A1A1A',
              marginBottom: 10,
            }}>
            Email Address
          </Text>
          <TextInput
            placeholder="Enter email"
            // onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
            style={{
              fontSize: 18,
              borderColor: '#E6E6E6',
              borderWidth: 2,
              borderRadius: 7,
              marginBottom: 20,
              paddingLeft: 10,
            }} // This will show an email keyboard
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontSize: 16,
              fontWeight: '400',
              color: '#1A1A1A',
            }}>
            Reset password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '100%'}} onPress={handleProfileUpdate}>
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
              // borderWidth: 1,
              // borderColor: '#CCCCCC',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyDetails;

const styles = StyleSheet.create({});
