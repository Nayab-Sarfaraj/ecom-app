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
import {combineReducers} from '@reduxjs/toolkit';
import api from '../utils/api';
import userContext from '../Context/userContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
const ResetPaaword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const {userInfo, setUserInfo} = useContext(userContext);
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation();
  const handleConfirmPassword = text => {
    setConfirmPassword(text);
  };
  const handleNewPassword = text => {
    setNewPassword(text);
  };
  const handlePassword = text => {
    console.log(text);
    setOldPassword(text);
  };
  const handlePasswordUpdate = async () => {
    try {
      console.log(oldPassword + '  ' + newPassword + '  ' + confirmPassword);
      const res = await api.post('/api/v1/update/password', {
        oldPassword,
        newPassword,
        confirmPassword,
      });
      const data = res.data;
      console.log(data);
      if (data.success === true) {
        setUserInfo([]);
        const response = await api.get('/api/v1/logout');
        const data = response.data;
        console.log('logout data', data);
        if (data.success === true) {
          console.log('here');
          await setIsVisible(true);
        }
      }
    } catch (error) {
      console.log('update password error ', error);
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
            <MaterialCommunityIcons
              name={'check-circle-outline'}
              size={80}
              style={{color: '#0C9409'}}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                color: '#1A1A1A',
                marginVertical: 10,
              }}>
              Password Changed!
            </Text>
            <Text style={{color: '#808080', fontSize: 18, fontWeight: '400'}}>
              you can now use your new password to login to your account
            </Text>
            <TouchableOpacity
              style={{width: '100%'}}
              onPress={() => navigation.navigate('LogIn')}>
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
                }}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
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
        Reset password
      </Text>
      <Text style={{fontSize: 20, fontWeight: '300'}}>
        Set the new password for your account
      </Text>
      <View>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, color: '#1A1A1A', marginBottom: 7}}>
            Old Password
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
                borderColor: oldPassword
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

                color: '#1A1A1A',
              }}
              secureTextEntry={false}
              value={oldPassword}
              onChangeText={handlePassword}
            />
            {isValidPassword ? (
              <AntDesign
                name={'exclamationcircleo'}
                size={20}
                style={[
                  {color: '#ED1010'},
                  oldPassword === '' && {display: 'none'},
                ]}
              />
            ) : (
              <AntDesign
                name={'checkcircleo'}
                size={20}
                style={[
                  {color: '#0C9409'},
                  oldPassword === '' && {display: 'none'},
                ]}
              />
            )}
          </View>
        </View>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 20, color: '#1A1A1A', marginBottom: 7}}>
            New Password
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
                borderColor: newPassword
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

                color: '#1A1A1A',
              }}
              secureTextEntry={false}
              value={newPassword}
              onChangeText={handleNewPassword}
            />
            {isValidPassword ? (
              <AntDesign
                name={'exclamationcircleo'}
                size={20}
                style={[
                  {color: '#ED1010'},
                  newPassword === '' && {display: 'none'},
                ]}
              />
            ) : (
              <AntDesign
                name={'checkcircleo'}
                size={20}
                style={[
                  {color: '#0C9409'},
                  newPassword === '' && {display: 'none'},
                ]}
              />
            )}
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 20, color: '#1A1A1A', marginBottom: 7}}>
            Confirm Password
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
                borderColor: confirmPassword
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

                color: '#1A1A1A',
              }}
              secureTextEntry={false}
              value={confirmPassword}
              onChangeText={handleConfirmPassword}
            />
            {isValidPassword ? (
              <AntDesign
                name={'exclamationcircleo'}
                size={20}
                style={[
                  {color: '#ED1010'},
                  confirmPassword === '' && {display: 'none'},
                ]}
              />
            ) : (
              <AntDesign
                name={'checkcircleo'}
                size={20}
                style={[
                  {color: '#0C9409'},
                  confirmPassword === '' && {display: 'none'},
                ]}
              />
            )}
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={handlePasswordUpdate}>
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
          Continue
        </Text>
      </TouchableOpacity>
      {renderModal()}
    </View>
  );
};

export default ResetPaaword;

const styles = StyleSheet.create({});
