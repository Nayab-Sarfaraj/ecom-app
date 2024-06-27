import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { LogOutUser } from '../store/slices/LoginCredentials';
const AccountScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const isLoggedIn = useSelector(state => state.LoginCredentials.isLoggedIn)
  const handleNaviagtion = location => {
    console.log(location);
    navigation.navigate(location);
  };

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {

    if (!isLoggedIn) {
      navigation.navigate('SignUp');
    }
  }, []);
  const handleLogOut = async () => {
    try {
      const res = await dispatch(LogOutUser())
      const data = res.payload;
      if (!isLoggedIn || data.success) {
        navigation.navigate('SignUp');
      }
    } catch (error) {
      console.log("error while logging ui ")
      console.log(error)
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
              style={{ color: '#ED1010' }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                color: '#1A1A1A',
                marginVertical: 10,
              }}>
              Logout?
            </Text>
            <Text style={{ color: '#808080', fontSize: 18, fontWeight: '300' }}>
              Are you sure you want to logout?
            </Text>
            <TouchableOpacity style={{ width: '100%' }} onPress={handleLogOut}>
              <Text
                style={{
                  backgroundColor: '#ED1010',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  paddingVertical: 15,
                  fontSize: 17,
                  fontWeight: '500',
                  borderRadius: 5,
                  marginVertical: 10,
                }}>
                Yes, Logout
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => setIsVisible(!isVisible)}>
              <Text
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#1A1A1A',
                  textAlign: 'center',
                  paddingVertical: 15,
                  fontSize: 17,
                  fontWeight: '500',
                  borderRadius: 5,
                  marginVertical: 10,
                  borderWidth: 1,
                  borderColor: '#CCCCCC',
                }}>
                No , cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const handleLogout = () => {

    setIsVisible(!isVisible);
  };
  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <View
        style={{
          borderBottomWidth: 2,
          paddingBottom: 20,
          borderBottomColor: '#E6E6E6',
          paddingHorizontal: 20,
        }}>
        <Header text={'Account'} />
      </View>
      {/* order section */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 25,
          paddingHorizontal: 20,
          // paddingBottom: 25,
        }}
        onPress={() => handleNaviagtion('MyOrders')}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Octicons
            name={'container'}
            size={23}
            style={{ color: '#1A1A1A', marginRight: 10 }}
          />
          <Text style={{ color: '#1A1A1A', fontSize: 18, fontWeight: '400' }}>
            My Orders
          </Text>
        </View>
        <MaterialIcons name={'arrow-forward-ios'} size={20} />
      </TouchableOpacity>
      {/* <View
        style={{
          borderBottomColor: '#E6E6E6',
          borderBottomWidth: 10,
        }}></View> */}
      {/* details address notification payment */}
      <View
        style={{
          paddingHorizontal: 20,

          borderBottomWidth: 10,
          borderTopWidth: 10,
          borderColor: '#E6E6E6',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginVertical: 20,
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 2,
            paddingVertical: 20,
            paddingBottom: 25,
            // paddingHorizontal: 20,
          }}
          onPress={() => handleNaviagtion('MyDetails')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name={'account-details'}
              size={23}
              style={{ color: '#1A1A1A', marginRight: 10 }}
            />
            <Text style={{ color: '#1A1A1A', fontSize: 18, fontWeight: '400' }}>
              My Details
            </Text>
          </View>
          <MaterialIcons name={'arrow-forward-ios'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginVertical: 20,
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 2,
            paddingVertical: 20,
            paddingBottom: 25,
            // paddingHorizontal: 20,
          }}
          onPress={() => handleNaviagtion('AddressScreen')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name={'home-city'}
              size={23}
              style={{ color: '#1A1A1A', marginRight: 10 }}
            />
            <Text style={{ color: '#1A1A1A', fontSize: 18, fontWeight: '400' }}>
              My Address
            </Text>
          </View>
          <MaterialIcons name={'arrow-forward-ios'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginVertical: 20,
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 2,
            paddingVertical: 20,
            paddingBottom: 25,
            // paddingHorizontal: 20,
          }}
          onPress={() => handleNaviagtion('Payment')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign
              name={'creditcard'}
              size={22}
              style={[{ color: '#1A1A1A', marginRight: 10 }]}
            />
            <Text style={{ color: '#1A1A1A', fontSize: 18, fontWeight: '400' }}>
              Payment Methods
            </Text>
          </View>
          <MaterialIcons name={'arrow-forward-ios'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginVertical: 20,
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 2,
            paddingVertical: 20,
            paddingBottom: 25,
            // paddingHorizontal: 20,
          }}
          onPress={() => handleNaviagtion('Notification')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SimpleLineIcons
              name={'bell'}
              size={25}
              style={{ color: '#1A1A1A', marginRight: 10 }}
            />

            <Text style={{ color: '#1A1A1A', fontSize: 18, fontWeight: '400' }}>
              Notification
            </Text>
          </View>
          <MaterialIcons name={'arrow-forward-ios'} size={20} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          borderBottomColor: '#E6E6E6',
          borderBottomWidth: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginVertical: 20,
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 2,
            paddingVertical: 20,
            paddingBottom: 25,
            // paddingHorizontal: 20,
          }}
          onPress={() => handleNaviagtion('FAQS')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Octicons
              name={'question'}
              size={23}
              style={{ color: '#1A1A1A', marginRight: 10 }}
            />
            <Text style={{ color: '#1A1A1A', fontSize: 18, fontWeight: '400' }}>
              FAQs
            </Text>
          </View>
          <MaterialIcons name={'arrow-forward-ios'} size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginVertical: 20,
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 2,
            paddingVertical: 20,
            paddingBottom: 25,
            // paddingHorizontal: 20,
          }}
          onPress={() => handleNaviagtion('Help')}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name={'headphones'}
              size={23}
              style={{ color: '#1A1A1A', marginRight: 10 }}
            />
            <Text style={{ color: '#1A1A1A', fontSize: 18, fontWeight: '400' }}>
              Help Center
            </Text>
          </View>
          <MaterialIcons name={'arrow-forward-ios'} size={20} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
            // marginVertical: 20,
            borderBottomColor: '#E6E6E6',
            borderBottomWidth: 2,
            paddingVertical: 20,
            paddingBottom: 25,
          }}
          onPress={handleLogout}>
          <MaterialIcons
            name={'logout'}
            size={23}
            style={{ color: '#ED1010', marginRight: 10 }}
          />
          <Text style={{ color: '#ED1010', fontSize: 18, fontWeight: '400' }}>
            Log out
          </Text>
          {renderModal()}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
