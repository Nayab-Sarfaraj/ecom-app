import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const QuestionCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#E6E6E6',
        borderWidth: 2,
        borderRadius: 8,
        padding: 15,
        marginVertical: 15,
      }}>
      <Text style={{fontSize: 18, fontWeight: '400', color: '#1A1A1A'}}>
        What payment methods are accepted?
      </Text>
      <MaterialIcons
        name={'keyboard-arrow-down'}
        size={30}
        style={{color: '#1A1A1A'}}
      />
    </View>
  );
}

export default QuestionCard

const styles = StyleSheet.create({})