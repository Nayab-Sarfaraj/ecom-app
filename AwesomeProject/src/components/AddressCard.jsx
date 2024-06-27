import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const AddressCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: '#E6E6E6',
        padding: 15,
        borderRadius: 10,
        marginBottom:20
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
        }}>
        <SimpleLineIcons
          name={'location-pin'}
          size={22}
          style={{color: '#808080'}}></SimpleLineIcons>
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#1A1A1A', fontWeight: '700', fontSize: 17}}>
            Home
          </Text>
          <Text style={{color: '#808080', fontSize: 17, fontWeight: '300'}}>
            Jane street london route 66
          </Text>
        </View>
      </View>
      <FontAwesome name={'circle-o'} size={30} />
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({});
