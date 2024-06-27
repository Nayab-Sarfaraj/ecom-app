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
import Header from '../components/Header';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchItemCard from '../components/SearchItemCard';
import RecentCad from '../components/RecentCad';
import api from '../utils/api';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [keyword, setKeyword] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  // useEffect(() => {
  //   if (keyword) {
  //     getSearchItem(); // Call the function to make the API request when keyword changes
  //   }
  // }, [keyword]);

  // const getSearchItem = async () => {
  //   try {
  //     console.log('i am beibng called');
  //     setIsLoading(true);
  //     const response = await api.get(`/api/v1/product?keyword=${searchQuery}`);
  //     console.log(keyword);
  //     setSearchResult("the search result is " + response.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };
  const handleSearch = async () => {
   
    try {
      console.log('i am beibng called');
      setIsLoading(true);
      const response = await api.get(`/api/v1/product?keyword=${searchQuery}`);
      setSearchResult(response.data.products);
      console.log(response.data.products)
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

  };
  return (
    <View style={{ paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1 }}>
      <Header text={'Search'} />
      {/* search section */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 0.5,
          }}>
          <TouchableOpacity onPress={handleSearch}>
            <Feather name={'search'} size={25} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search for clothes ..."
            style={{ flex: 1, fontSize: 18 }}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
          />
          <TouchableOpacity>
            <FontAwesome
              name={'microphone'}
              size={25}
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* search section */}

      {/* search result or loading indicator */}
      {isLoading ? (
        <ActivityIndicator size={'large'} color={'#1A1A1A'} />
      ) : searchResult.length > 0 ? (
        <FlatList
          data={searchResult}
          renderItem={({ item }) => <SearchItemCard item={item} />}
          keyExtractor={item => item._id}
        />
      ) : (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Feather name={'search'} size={100} style={{ color: '#B3B3B3' }} />
          <Text
            style={{
              fontSize: 28,
              color: '#1A1A1A',
              fontWeight: '500',
              marginVertical: 20,
            }}>
            No Result Found!
          </Text>
          <Text
            style={{ fontSize: 20, textAlign: 'center', color: '#808080' }}
            numberOfLines={2}>
            Try similar words or something more general
          </Text>
        </View>
      )}
      {/* search result or loading indicator */}
    </View>
  );
};

export default SearchScreen;
