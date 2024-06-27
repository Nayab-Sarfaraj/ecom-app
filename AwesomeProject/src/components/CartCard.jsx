import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRoute} from '@react-navigation/native';
import CartContext from '../Context/CartContext';
const CartCard = ({item, placed}) => {
  const route = useRoute();
  //
  // console.log(placed);
  // const [quantity,setQuantity]=useState()

  const {cart, setCart} = useContext(CartContext);
  console.log(item);
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    if (quantity > 20) return;
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };
  useEffect(() => {
    setQuantity(item?.quantity);
  }, []);
  const handleDelete = () => {
    const newCart = [...cart];
    const filteredCart = newCart.filter(prd => prd._id !== item._id);
    setCart(filteredCart);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#CCCCCC',
        width: '100%',
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        // backgroundColor: '#CCCCCC',
      }}>
      <Image
        source={{
          uri: item?.images[0].url,
        }}
        style={{width: 100, height: 100, marginRight: 10}}></Image>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // width:"80%"
          }}>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#1A1A1A'}}>
            {item?.name}
          </Text>
          {placed ? (
            <Text
              style={{
                backgroundColor: '#E6E6E6',
                color: '#1A1A1A',
                fontSize: 14,
                paddingHorizontal: 7,
                paddingVertical: 5,
                borderRadius: 5,
              }}>
              In Transit
            </Text>
          ) : (
            <TouchableOpacity onPress={handleDelete}>
              <AntDesign name={'delete'} size={22} style={{color: '#ED1010'}} />
            </TouchableOpacity>
          )}
        </View>
        <Text style={{fontSize: 17, marginTop: 10}}>Size L</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={{fontSize: 20, fontWeight: '500', color: '#1A1A1A'}}>
            ${item?.price}
          </Text>
          {placed ? (
            <TouchableOpacity>
              <Text
                style={{
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  paddingHorizontal: 10,
                  borderRadius: 4,
                  paddingVertical: 7,
                }}>
                Track Order
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => handleIncrement()}>
                <AntDesign
                  name={'plus'}
                  size={20}
                  style={{
                    color: '#1A1A1A',
                    borderWidth: 1,
                    padding: 2,
                    borderColor: '#CCCCCC',
                  }}></AntDesign>
              </TouchableOpacity>
              <Text
                style={{fontSize: 17, color: '#1A1A1A', marginHorizontal: 10}}>
                {item?.quantity}
              </Text>
              <TouchableOpacity onPress={() => handleDecrement()}>
                <AntDesign
                  name={'minus'}
                  size={20}
                  style={{
                    color: '#1A1A1A',
                    borderColor: '#CCCCCC',
                    borderWidth: 1,
                    padding: 2,
                  }}></AntDesign>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({});
