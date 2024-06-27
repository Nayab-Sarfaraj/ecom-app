import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import Octicons from 'react-native-vector-icons/Octicons';
const MyOrders = () => {
  const [active, setActive] = useState('ongoing');
  const handleActive = newActive => setActive(newActive);
  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1, paddingHorizontal: 20}}>
      <Header text={'My Orders'} />
      {/* option bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#999999',
          padding: 10,
          borderRadius: 8,
          marginVertical: 20,
        }}>
        <TouchableOpacity
          style={{width: '50%'}}
          onPress={() => handleActive('ongoing')}>
          <Text
            style={[
              {
                color: '#E6E6E6',
                fontSize: 20,
                fontWeight: '500',
                marginRight: 20,
                // paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 8,
                textAlign: 'center',
              },
              active === 'ongoing' && {
                backgroundColor: '#FFFFFF',
                color: '#1A1A1A',
              },
            ]}>
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: '50%'}}>
          <Text
            style={[
              {
                color: '#E6E6E6',
                fontSize: 20,
                fontWeight: '500',
                paddingVertical: 10,
                borderRadius: 8,
                textAlign: 'center',
              },
              active === 'complete' && {
                backgroundColor: '#FFFFFF',
                color: '#1A1A1A',
              },
            ]}
            onPress={() => handleActive('complete')}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      {active === 'ongoing' ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartCard placed={true} />
          <CartCard placed={true} />
          <CartCard placed={true} />
          <CartCard placed={true} />
          <CartCard placed={true} />
          <CartCard placed={true} />
          <CartCard placed={true} />
          <CartCard placed={true} />
          <CartCard placed={true} />
          <CartCard placed={true} />
        </ScrollView>
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '80%',
          }}>
          <Octicons name={'container'} size={100} style={{color: '#B3B3B3'}} />
          <Text
            style={{
              fontSize: 28,
              color: '#1A1A1A',
              fontWeight: '500',
              marginVertical: 20,
            }}>
            No completed order
          </Text>
          <Text style={{fontSize: 20, textAlign: 'center', color: '#808080',fontWeight:"300"}}>
            {' '}
            You do not have any ongoing orders at this time
          </Text>
        </View>
      )}
    </View>
  );
};

export default MyOrders;

const styles = StyleSheet.create({});
