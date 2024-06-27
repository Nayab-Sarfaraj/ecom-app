import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
const PaymentCard = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#CCCCCC',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
      }}>
      <FontAwesome
        name={'cc-visa'}
        size={30}
        style={{color: '#1A1A1A', marginRight: 10}}
      />
      <TextInput
        secureTextEntry={true}
        style={{flex: 1, fontSize: 20}}
        value="$%^732323"></TextInput>
      <FontAwesome name={'circle-o'} size={25} />
    </View>
  );
}

export default PaymentCard

const styles = StyleSheet.create({})