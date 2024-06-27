import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import Header from '../components/Header';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute} from '@react-navigation/native';
import SavedContext from '../Context/SavedCart';
import CartContext from '../Context/CartContext';
const ProductDetalsScreens = () => {
  const route = useRoute();
  const {productDetail} = route.params;
  console.log(productDetail);
  const size = ['S', 'M', 'L'];
  const {savedItem, setSavedItem} = useContext(SavedContext);
  const {cart, setCart} = useContext(CartContext);
  const handleSaved = () => {
    // console.log('dsdasdasdasdas');
    if (!savedItem) {
      console.log('hdsadas');
      const newCart = [];
      newCart.push({...productDetail, quantity: 1});
      setSavedItem(newCart);
      return;
    }
    // console.log('hresdsds');
    const newCart = [...savedItem];

    const isExist = newCart.find(item => item._id === productDetail._id);
    console.log(isExist);
    if (isExist) {
      console.log('exist fdsdfsd  ' + isExist);
      return;
    } else {
      newCart.push({...productDetail, quantity: 1});
      setSavedItem(newCart);
    }
  };
  const handleAddToCart = () => {
    if (!cart) {
      const newCart = [];
      newCart.push({...productDetail, quantity: 1});
      setCart(newCart);
      console.log(cart)
      return;
    }
    // console.log('hresdsds');
    const newCart = [...cart];

    const isExist = newCart.find(item => item._id === productDetail._id);
    if (isExist) {
      console.log('exist fdsdfsd  ' + isExist);
      newCart.forEach(item => {
        if (item._id === productDetail._id) {
          item.quantity += 1;
        }
      });

      setCart(newCart);
      console.log(cart)
    } else {
      newCart.push({...productDetail, quantity: 1});
      setCart(newCart);
      console.log(cart)
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 20}}>
      <View style={{marginBottom: 15}}>
        <Header text={'Details'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: 370}}>
          <Image
            source={{
              uri: productDetail.images[0].url,
            }}
            style={{flex: 1, borderRadius: 20}}></Image>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: '5%',
              top: '5%',
              backgroundColor: '#FFFFFF',
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={handleSaved}>
            <Octicons name={'heart'} size={25} style={{color: '#1A1A1A'}} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 25,
              color: '#1A1A1A',
              fontWeight: '500',
              marginTop: 10,
            }}>
            {productDetail.name}
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Ionicons
              name={'star'}
              style={{color: '#FFA928', marginRight: 15}}
              size={20}
            />
            <Text
              style={{
                fontSize: 17,
                textDecorationLine: 'underline',
                color: '#1A1A1A',
              }}>
              {productDetail?.rating ? productDetail.ratings : 'Product'}/5
              <Text style={{textDecorationLine: 'none', color: '#808080'}}>
                ({productDetail.numOfReviews} reviews)
              </Text>
            </Text>
          </View>
          <Text style={{fontSize: 18, color: '#808080', marginTop: 20}}>
            {productDetail.description}
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: '#1A1A1A',
              fontWeight: '500',
              marginTop: 10,
            }}>
            Choose Size{' '}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {size.map(item => {
              return (
                <Text
                  style={{
                    borderColor: '#808080',
                    borderWidth: 1,
                    fontSize: 20,
                    color: '#1A1A1A',
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 5,
                    marginRight: 20,
                    marginTop: 10,
                    marginBottom: 20,
                  }}
                  key={item}>
                  {item}
                </Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 20,
          paddingBottom: 10,
        }}>
        <View>
          <Text style={{fontSize: 17}}>Price</Text>
          <Text style={{fontSize: 22, color: '#1A1A1A', fontWeight: '700'}}>
            ${productDetail?.price ? productDetail.price : '99.99'}
          </Text>
        </View>
        <TouchableOpacity onPress={handleAddToCart}>
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
              justifyContent: 'space-between',
            }}>
            <Feather
              name={'shopping-bag'}
              size={20}
              style={{color: 'white'}}></Feather>
            <Text style={{marginLeft: 15, color: 'white', fontSize: 18}}>
              Add to Cart{' '}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetalsScreens;

const styles = StyleSheet.create({});
