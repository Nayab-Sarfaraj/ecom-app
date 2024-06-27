import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from 'react-native-check-box';

const CheckboxExample = ({isChecked, setIsChecked, upperValue}) => {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:"flex-start"
      }}>
      <CheckBox
        style={{flex: 1, padding: 10}}
        onClick={handleCheckboxChange}
        isChecked={isChecked}
      />
      <Text style={{alignSelf: 'flex-start'}}>Under 500$</Text>
    </View>
  );
};

export default CheckboxExample;
