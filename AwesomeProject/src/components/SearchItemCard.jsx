import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SearchItemCard = ({ item }) => {
  const navigation = useNavigation()
  const handleNavigation = data => {
    navigation.navigate('ProductDetails', { productDetail: data });
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginBottom: 20,
        borderColor: '#B3B3B3',
        paddingBottom: 15,
        borderBottomWidth: 1,
      }}>
      <Image
        source={{
          uri: item.images[0].url,
        }}
        style={{ height: 100, width: 100, borderRadius: 10, marginRight: 10 }}

      />

      <View style={{ flex: 1 }}>
        <Text style={{ color: '#1A1A1A', fontSize: 20, fontWeight: '500' }}>
          {
            item.name
          }
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <Text style={{ fontSize: 15, marginRight: 10 }}>$ {item.price}</Text>
          <Text style={{ fontSize: 15, color: '#ED1010' }}>
            {/* {data.discount === 0 ? null : '-' + data.discount + '%'}{' '} */}
            -70%
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleNavigation(item)}>

        <MaterialCommunityIcons
          name={'arrow-top-right'}
          size={30}
          style={{ color: '#1A1A1A' }}
        />

      </TouchableOpacity>
    </View>
  );
};

export default SearchItemCard;

const styles = StyleSheet.create({});
