import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
const Header = ({text}) => {
  const navigation = useNavigation();
  console.log(text);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 22,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name={'arrow-back'} size={30} style={{color: '#1A1A1A'}} />
      </TouchableOpacity>
      <Text style={{color: '#1A1A1A', fontSize: 26, fontWeight: '500'}}>
        {text}
      </Text>
      <SimpleLineIcons name={'bell'} size={25} style={{color: '#1A1A1A'}} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
