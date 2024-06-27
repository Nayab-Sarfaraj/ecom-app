import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import data from '../Data/data.json';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CartContext from '../Context/CartContext';
const CartScreen = () => {
  const naivgation = useNavigation();
  const handleCheckOut = () => {
    naivgation.navigate('CheckOut', {subTotal: subTotal});
  };
  const [subTotal, setSubTotal] = useState(0);
  const {cart, setCart} = useContext(CartContext);
  // console.log('cart  ' );
  useEffect(() => {
    if (cart) {
      let sum = 0;
      cart.forEach(ele => {
        sum += ele.price * ele.quantity;
      });
      setSubTotal(sum);
      console.log(subTotal);
    }
  }, [cart]);
  return (
    <View
      style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF'}}
      text={'Cart'}>
      <Header text={'Cart'} />
      {/* cart card container */}

      {cart.length ? (
        <>
          <ScrollView
            style={{
              // flexDirection: 'column',
              // alignItems: 'center',
              marginVertical: 30,
              marginBottom: 70,
            }}
            showsVerticalScrollIndicator={false}>
            {cart?.map(item => {
              // console.log(item);
              return <CartCard item={item} key={item?._id} />;
            })}

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
                <Text style={{fontSize: 18, color: '#1A1A1A'}}>
                  ${subTotal}
                </Text>
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
                <Text style={{fontSize: 18, color: '#808080'}}>
                  Shipping Fee
                </Text>
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
              <Text style={{fontSize: 18, color: '#1A1A1A'}}>Sub-Total</Text>
              <Text style={{fontSize: 18, color: '#1A1A1A', fontWeight: '700'}}>
                $9.99
              </Text>
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
                  Go To Checkout{' '}
                </Text>
                <AntDesign
                  name={'arrowright'}
                  size={20}
                  style={{color: 'white'}}></AntDesign>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '95%',
          }}>
          <AntDesign
            name={'shoppingcart'}
            size={100}
            style={{color: '#B3B3B3'}}
          />
          <Text
            style={{
              fontSize: 28,
              color: '#1A1A1A',
              fontWeight: '500',
              marginVertical: 20,
            }}>
            Your Cart Is Empty!
          </Text>
          <Text style={{fontSize: 20, textAlign: 'center', color: '#808080'}}>
            {' '}
            When you add products.they will appear here
          </Text>
        </View>
      )}

      {/* cart card container */}
      {/* total section */}

      {/* total section */}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
