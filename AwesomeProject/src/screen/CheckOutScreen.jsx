import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import {useRoute} from '@react-navigation/native';
const CheckOutScreen = () => {
  const route = useRoute();
  console.log(route.params);
  const [subTotal, setSubTotal] = useState(0);
  const paymentMethods = ['Card', 'Cash', 'Pay'];
  const [active, setActive] = useState('Card');
  const handlePayment = data => {
    setActive(data);
  };
  useEffect(() => {
    setSubTotal(route.params?.subTotal);
  }, []);
  return (
    <View style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          borderBottomWidth: 3,
          paddingBottom: 20,
          borderBottomColor: '#E6E6E6',
        }}>
        <Header text={'Checkout'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
          marginTop: 25,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#1A1A1A'}}>
          Delivery Address
        </Text>
        <Text
          style={{
            textDecorationLine: 'underline',
            color: '#1A1A1A',
            fontSize: 17,
          }}>
          Change
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          borderBottomWidth: 4,
          borderBottomColor: '#E6E6E6',
          paddingBottom: 15,
        }}>
        <SimpleLineIcons
          name={'location-pin'}
          size={22}
          style={{color: '#999999'}}></SimpleLineIcons>
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#1A1A1A', fontWeight: '700', fontSize: 17}}>
            Home
          </Text>
          <Text style={{color: '#999999', fontSize: 17, fontWeight: '300'}}>
            Jane street london route 66
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: '#1A1A1A',
          marginVertical: 15,
        }}>
        Payment Methods
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={[
            {
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderColor: '#CCCCCC',
              borderWidth: 2,
              paddingHorizontal: 20,
              alignItems: 'center',
              paddingVertical: 7,
              borderRadius: 7,
              marginRight: 15,
            },
            active === 'Card' && {backgroundColor: '#1A1A1A'},
          ]}
          onPress={() => handlePayment('Card')}>
          <AntDesign
            name={'creditcard'}
            size={22}
            style={[
              {color: '#1A1A1A', marginRight: 10},
              active === 'Card' && {color: '#FFFFFF'},
            ]}
          />
          <Text
            style={[
              {color: '#1A1A1A', fontSize: 18, fontWeight: '500'},
              active === 'Card' && {color: '#FFFFFF'},
            ]}>
            Card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderColor: '#CCCCCC',
              borderWidth: 2,
              paddingHorizontal: 20,
              alignItems: 'center',
              paddingVertical: 7,
              borderRadius: 7,
              marginRight: 15,
            },
            active === 'Cash' && {backgroundColor: '#1A1A1A'},
          ]}
          onPress={() => handlePayment('Cash')}>
          <MaterialCommunityIcons
            name={'cash'}
            size={25}
            style={[
              {color: '#1A1A1A', marginRight: 10},
              active === 'Cash' && {color: '#FFFFFF'},
            ]}
          />
          <Text
            style={[
              {color: '#1A1A1A', fontSize: 18, fontWeight: '500'},
              active === 'Cash' && {color: '#FFFFFF'},
            ]}>
            Cash
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderColor: '#CCCCCC',
              borderWidth: 2,
              paddingHorizontal: 20,
              alignItems: 'center',
              paddingVertical: 7,
              borderRadius: 7,
              marginRight: 15,
            },
            active === 'Pay' && {backgroundColor: '#1A1A1A'},
          ]}
          onPress={() => handlePayment('Pay')}>
          <AntDesign
            name={'apple1'}
            size={22}
            style={[
              {color: '#1A1A1A', marginRight: 10},
              active === 'Pay' && {color: '#FFFFFF'},
            ]}
          />
          <Text
            style={[
              {color: '#1A1A1A', fontSize: 18, fontWeight: '500'},
              active === 'Pay' && {color: '#FFFFFF'},
            ]}>
            Pay
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#CCCCCC',
          borderWidth: 2,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginVertical: 20,
        }}>
        <FontAwesome
          name={'cc-visa'}
          size={30}
          style={{color: '#1A1A1A', marginRight: 10}}
        />
        <TextInput
          secureTextEntry={true}
          style={{flex: 1, fontSize: 20}}
          value="$%^732323"></TextInput>
        <Feather
          name={'edit-2'}
          size={25}
          style={{color: '#1A1A1A', marginHorizontal: 10}}></Feather>
      </View>
      <View
        style={{
          borderColor: '#CCCCCC',
          borderWidth: 0.5,
          marginBottom: 10,
        }}></View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: '#1A1A1A',
          marginBottom: 10,
        }}>
        Order Summary
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          borderColor: '#808080',
          paddingBottom: 10,
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: '#808080'}}>Sub-Total</Text>
          <Text style={{fontSize: 18, color: '#1A1A1A'}}>${subTotal}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: '#808080'}}>VAT (%)</Text>
          <Text style={{fontSize: 18, color: '#1A1A1A'}}>0.00</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, color: '#808080'}}>Shipping Fee</Text>
          <Text style={{fontSize: 18, color: '#1A1A1A'}}>$70.99</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={{fontSize: 18, color: '#1A1A1A'}}>Total</Text>
        <Text style={{fontSize: 18, color: '#1A1A1A', fontWeight: '700'}}>
          $9.99
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#CCCCCC',
            borderWidth: 2,
            paddingHorizontal: 15,
            borderRadius: 10,
            // flex: 1,
            width: '75%',
          }}>
          <Octicons name={'tag'} size={25} style={{marginRight: 15}} />
          <TextInput placeholder="Enter coupon code" style={{fontSize: 20}} />
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: '#FFFFFF',
              backgroundColor: '#1A1A1A',
              fontSize: 17,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
            }}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => handleCheckOut()}>
        <View
          style={{
            color: 'white',
            backgroundColor: '#1A1A1A',
            //   flex: 1,

            //   flex:1,
            //   textAlign:"center"
            paddingHorizontal: 50,
            paddingVertical: 15,
            borderRadius: 10,
            //   width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{marginRight: 15, color: 'white', fontSize: 20}}>
            Place Order{' '}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({});
