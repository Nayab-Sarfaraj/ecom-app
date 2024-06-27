import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import SavedContext from '../Context/SavedCart';
import { useSelector } from 'react-redux';
const ProductCard = ({ item, saved }) => {
  const data = item.item;
  const { savedItem, setSavedItem } = useContext(SavedContext);
  const isLoggedIn = useSelector(state => state.LoginCredentials.isLoggedIn)
  const navigation = useNavigation();
  const handleNavigation = data => {
    navigation.navigate('ProductDetails', { productDetail: data });
  };
  const handleSaved = () => {
    if (!isLoggedIn) return
    if (!savedItem) {
      console.log('hdsadas');
      const newCart = [];
      newCart.push({ ...data, quantity: 1 });
      setSavedItem(newCart);
      return;
    }
    // console.log('hresdsds');
    const newCart = [...savedItem];

    const isExist = newCart.find(item => item._id === data._id);
    console.log(isExist);
    if (isExist) {
      console.log('exist fdsdfsd  ' + isExist);
      return;
    } else {
      newCart.push({ ...data, quantity: 1 });
      setSavedItem(newCart);
    }
  };
  const handleDelete = () => {
    const newCart = [...savedItem];
    const filteredCart = newCart.filter(item => item._id !== data._id);
    setSavedItem(filteredCart);
  };
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 13, borderRadius: 20 }}
      onPress={() => {
        handleNavigation(data);
      }}>
      <View>
        <Image
          source={{
            uri: data.images[0].url,
          }}
          style={{
            height: 280,
            width: 190,
            borderRadius: 30,
            marginTop: 20,
          }}></Image>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: '8%',
            top: '15%',
            backgroundColor: '#FFFFFF',
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={saved === true ? handleDelete : handleSaved}>
          {saved === true ? (
            <Octicons
              name={'heart-fill'}
              size={25}
              style={{ color: '#ED1010' }}
            />
          ) : (
            <Octicons name={'heart'} size={25} style={{ color: '#1A1A1A' }} />
          )}
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 21, fontWeight: '700', color: '#1A1A1A' }}>
          {data.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'center',
            marginTop: 5,
          }}>
          <Text style={{ fontSize: 15, marginRight: 10 }}>${data.price}</Text>
          {saved === true ? null : (
            <Text style={{ fontSize: 15, color: '#ED1010' }}>
              {data.discount === 0 ? null : '-' + data.discount + '%'}{' '}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
