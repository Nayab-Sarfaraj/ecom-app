import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
const HelpScreen = () => {
  return (
    <View style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1}}>
      <View
        style={{
          borderBottomWidth: 3,
          paddingBottom: 20,
          borderBottomColor: '#E6E6E6',
        }}>
        <Header text={'Help Center'} />
      </View>
      <ScrollView style={{}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#E6E6E6',
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            marginVertical: 20,
          }}>
          <MaterialIcons
            name={'headphones'}
            size={25}
            style={{marginHorizontal: 10, color: '#1A1A1A'}}
          />
          <Text style={{color: '#1A1A1A', fontSize: 20, fontWeight: '400'}}>
            Customer Care
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#E6E6E6',
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <FontAwesome
            name={'whatsapp'}
            size={25}
            style={{marginHorizontal: 10, color: '#1A1A1A'}}
          />
          <Text style={{color: '#1A1A1A', fontSize: 20, fontWeight: '400'}}>
            Whatsapp
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#E6E6E6',
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <SimpleLineIcons
            name={'social-twitter'}
            size={25}
            style={{marginHorizontal: 10, color: '#1A1A1A'}}
          />
          <Text style={{color: '#1A1A1A', fontSize: 20, fontWeight: '400'}}>
            Facebook
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#E6E6E6',
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
          }}>
          <MaterialIcons
            name={'headphones'}
            size={25}
            style={{marginHorizontal: 10, color: '#1A1A1A'}}
          />
          <Text style={{color: '#1A1A1A', fontSize: 20, fontWeight: '400'}}>
            Twitter
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#E6E6E6',
            borderWidth: 2,
            padding: 10,
            borderRadius: 10,
          }}>
          <FontAwesome5Brands
            name={'instagram'}
            size={25}
            style={{marginHorizontal: 10, color: '#1A1A1A'}}
          />
          <Text style={{color: '#1A1A1A', fontSize: 20, fontWeight: '400'}}>
            Instagram
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({});
