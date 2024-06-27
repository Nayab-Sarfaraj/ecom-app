import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import data from '../Data/data.json';
import ProductCard from '../components/ProductCard';
import Octicons from 'react-native-vector-icons/Octicons';
import SavedContext from '../Context/SavedCart';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const SavedScreen = () => {
  const [isSaved, setIsSaved] = useState(false);
  const { savedItem, setSavedItem } = useContext(SavedContext);
  const isLoggedIn = useSelector(state => state.LoginCredentials.isLoggedIn)
  const navigation = useNavigation()
  useEffect(() => {
    if (savedItem.length) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [savedItem]);
  useEffect(() => {
    if (!isLoggedIn) navigation.navigate('SignUp');

  }, [])
  return (
    <View>
      <View style={{ paddingHorizontal: 20 }}>
        <Header text={'Saved Items'} />
      </View>
      {isSaved === true ? (
        <FlatList
          data={savedItem}
          renderItem={item => <ProductCard item={item} saved={true} />}
          numColumns={2}
          keyExtractor={item => item._id}
          showsVerticalScrollIndicator={false}></FlatList>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%',
          }}>
          <Octicons name={'heart'} size={100} style={{ color: '#B3B3B3' }} />
          <Text
            style={{
              fontSize: 28,
              color: '#1A1A1A',
              fontWeight: '500',
              marginVertical: 20,
            }}>
            No Saved Items!
          </Text>
          <Text style={{ fontSize: 20, textAlign: 'center', color: '#808080' }}>
            {' '}
            You do not have any saved Items
          </Text>
          <Text style={{ fontSize: 20, textAlign: 'center', color: '#808080' }}>
            .Go to Home and add some
          </Text>
        </View>
      )}
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({});
