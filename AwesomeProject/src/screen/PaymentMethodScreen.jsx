import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import AddressCard from '../components/AddressCard';
import PaymentCard from '../components/PaymentCard';

const PaymentMethodScreen = () => {
  return (
    <View style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1}}>
      <View
        style={{
          borderBottomWidth: 3,
          paddingBottom: 20,
          borderBottomColor: '#E6E6E6',
        }}>
        <Header text={'Payment Method'} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#1A1A1A',
            marginVertical: 20,
          }}>
          Saved Cards
        </Text>
        <View>
          <PaymentCard />
          <PaymentCard />
          <PaymentCard />

          <PaymentCard />
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
          <Text style={{fontSize: 20, color: '#1A1A1A'}}>Add New Card</Text>
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

export default PaymentMethodScreen;

const styles = StyleSheet.create({});
