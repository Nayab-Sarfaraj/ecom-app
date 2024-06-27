import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddressCard from '../components/AddressCard';
const AddressScreen = () => {
  return (
    <View style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1}}>
      <View
        style={{
          borderBottomWidth: 3,
          paddingBottom: 20,
          borderBottomColor: '#E6E6E6',
        }}>
        <Header text={'Checkout'} />
      </View>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#1A1A1A',
            marginVertical: 20,
          }}>
          Saved Addresses
        </Text>

        <View>
          <AddressCard />
          <AddressCard />
          <AddressCard />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#CCCCCC',
            borderWidth: 1,
            paddingVertical: 15,
            borderRadius: 10,
          }}>
          <AntDesign
            name={'plus'}
            size={30}
            style={{color: '#1A1A1A', marginRight: 10}}
          />
          <Text style={{fontSize: 20, color: '#1A1A1A'}}>Add New Address</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderColor: '#CCCCCC',
          borderWidth: 1,
          paddingVertical: 15,
          borderRadius: 10,
          marginVertical: 20,
          backgroundColor: '#1A1A1A',
        }}>
        <Text style={{fontSize: 20, color: '#FFFFFF'}}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
