import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const RecentCad = ({item}) => {
  console.log(item);
  const data = item;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        marginBottom: 20,
        borderColor: '#E6E6E6',
        paddingBottom: 15,
      }}>
      <Text style={{fontSize: 20, color: '#1A1A1A', fontWeight: '300'}}>
        {data}
      </Text>
      <Ionicons
        name={'close-circle-outline'}
        size={25}
        style={{color: '#999999'}}
      />
    </View>
  );
};

export default RecentCad;

const styles = StyleSheet.create({});
