import {
  ActivityIndicator,
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductCard from '../components/ProductCard';
import data from '../Data/data.json';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/productSlice';
import api from '../utils/api';
import { useNavigation } from '@react-navigation/native';
import { FetchUserProfile } from '../store/slices/LoginCredentials';


const HomeScreen = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [minValue, setMinValue] = useState(0);
  const [mavVal, setMaxVal] = useState(25000);
  const navigation = useNavigation();
  const [isEndReach, setIsEndReach] = useState(false);
  const dispatch = useDispatch()
  const fetchMoreProducts = () => {
    if (!isEndReach) setPage(page + 1);
    console.log(page);
  };
  const getProducts = async () => {
    let link = '';
    if (page === 0) setPage(1);

    if (category) {
      link = `/api/v1/product?category=${category}&page=${page}&price[gt]=${minValue}&price[lt]=${mavVal}`;
    } else {
      link = `/api/v1/product?page=${page}&price[gt]=${minValue}&price[lt]=${mavVal}`;
    }

    const { data } = await api.get(link);

    if (data.legth < 6 || data == []) {
      setIsLoading(false);
      setIsEndReach(true);
    }
    setProducts([...products, ...data.products]);
  };
  const Categories = [
    'All',
    't-shirt',
    'jeans',
    'shoe',
    'Accessories',
    'New',
    'Formal',
    'Casual',
  ];

  const [active, setActive] = useState('All');
  const handleActiveCAategory = item => {
    setActive(item);
    if (item !== 'All') {
      setPage(0);
      setProducts([]);
      setCategory(item);
      setMaxVal(25000);
      setMinValue(0);
    } else {
      setPage(0);
      setProducts([]);
      setCategory('');
      setMaxVal(25000);
      setMinValue(0);
    }
  };

  useEffect(() => {
    getProducts();
  }, [page, category, active]);
  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handlePriceFilter = () => {
    setProducts([]);
    setPage(0);
    getProducts();
    setIsVisible(!isVisible);
  };
  const renderModal = () => {
    return (
      <Modal visible={isVisible} transparent={true} animationType="slide" delay>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set background color to transparent
          }}>
          <View
            style={{
              height: '50%',
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#FFFFFF',
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 20,
                paddingBottom: 10,
                borderBottomWidth: 0.5,
                border: '#E6E6E6',
              }}>
              <Text style={{ color: '#1A1A1A', fontSize: 25, fontWeight: '600' }}>
                Filter
              </Text>
              <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
                <Feather
                  name={'x'}
                  size={30}
                  style={{ color: '#1A1A1A', fontWeight: '700' }}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                marginVertical: 10,
                color: '#1A1A1A',
              }}>
              Price Range
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                    width: 120,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      // color: '#1A1A1A',
                      // marginRight:10
                    }}>
                    Min
                  </Text>
                  <TextInput
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      flex: 1,
                    }}
                    value={minValue}
                    onChangeText={text => setMinValue(text)}></TextInput>
                </View>
                <Text
                  style={{
                    marginHorizontal: 20,
                    fontSize: 50,
                    color: '#1A1A1A',
                  }}>
                  -
                </Text>
                <View
                  style={{
                    backgroundColor: '#D9D9D9',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                    width: 120,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      // color: '#1A1A1A',
                      // marginRight:10
                    }}>
                    Max
                  </Text>
                  <TextInput
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      flex: 1,
                    }}
                    value={mavVal}
                    onChangeText={text => setMaxVal(text)}></TextInput>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={handlePriceFilter}>
              <Text
                style={{
                  backgroundColor: '#1A1A1A',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  position: 'absolute',
                  // bottom: '100%',
                  top: 170,
                  padding: 10,
                  fontSize: 17,
                  width: '100%',
                  borderRadius: 10,
                  fontWeight: '600',
                }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  useEffect(() => {
    dispatch(FetchUserProfile())

  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      {/* `header componext` */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 22,
          paddingHorizontal: 20,
        }}>
        <Text style={{ color: '#1A1A1A', fontSize: 35, fontWeight: '700' }}>
          Discover
        </Text>
        <SimpleLineIcons name={'bell'} size={25} style={{ color: '#1A1A1A' }} />
      </View>
      {/* header component */}

      {/* search component */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '85%',
            padding: 5,
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
            borderWidth: 0.5,
          }}
          onPress={handleSearch}>
          <TouchableOpacity onPress={handleSearch}>
            <Feather name={'search'} size={25} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>

          <TextInput
            placeholder="Search for clother ..."
            style={{ flex: 1, fontSize: 18 }}
          />

          <FontAwesome
            name={'microphone'}
            size={25}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#1A1A1A',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={() => setIsVisible(!isVisible)}>
          <Ionicons
            name={'filter-sharp'}
            size={30}
            style={{ color: '#FFFFFF' }}
          />
        </TouchableOpacity>
        {renderModal()}
      </View>

      {/* search component  */}

      {/* category */}

      {/* category */}
      {/* Product contrainer */}

      {/* <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <ProductCard />
        <ProductCard />
      </View> */}
      <FlatList
        ListHeaderComponent={() => {
          return (
            <>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{
                  maxHeight: 100,
                  marginVertical: 5,
                  paddingHorizontal: 20,
                }}>
                {Categories.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleActiveCAategory(item)}
                      key={index}>
                      <Text
                        style={[
                          {
                            textTransform: 'capitalize',
                            fontSize: 20,
                            marginHorizontal: 10,
                            color: 'black',
                            backgroundColor: '#E6E6E6',
                            padding: 10,
                            borderRadius: 10,
                          },
                          active === item && {
                            backgroundColor: '#1A1A1A',
                            color: '#FFFFFF',
                          },
                        ]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </>
          );
        }}
        data={products}
        renderItem={item => <ProductCard item={item} />}
        numColumns={2}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        onEndReached={fetchMoreProducts}
        onEndReachedThreshold={0}
        ListFooterComponent={() => {
          return (
            <>
              {isLoading ? (
                <View style={{ marginVertical: 20 }}>
                  <ActivityIndicator
                    size={'large'}
                    style={{ color: '#1A1A1A' }}
                  />
                </View>
              ) : null}
            </>
          );
        }}></FlatList>
      {/* product container */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
