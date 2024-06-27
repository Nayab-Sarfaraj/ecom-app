import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import QuestionCard from '../components/QuestionCard';
const FAQs = () => {
  const Type = ['General', 'Account', 'Pay', 'Services'];
  const [active, setActive] = useState('General');
  const handleActive = item => {
    setActive(item);
  };
  return (
    <View style={{paddingHorizontal: 20, backgroundColor: '#FFFFFF', flex: 1}}>
      <View
        style={{
          borderBottomWidth: 3,
          paddingBottom: 20,
          borderBottomColor: '#E6E6E6',
        }}>
        <Header text={'FAQs'} />
      </View>
      <ScrollView
        horizontal={true}
        style={{marginVertical: 25, maxHeight: 50}}
        showsHorizontalScrollIndicator={false}>
        {Type.map((item, index) => {
          return (
            <TouchableOpacity style={{marginRight: 20}} key={index}>
              <Text
                style={[
                  {
                    fontSize: 18,
                    fontWeight: '500',
                    backgroundColor: '#FFFFFF',
                    color: '#1A1A1A',
                    borderColor: '#E6E6E6',
                    borderWidth: 2,
                    paddingHorizontal: 15,
                    paddingVertical: 7,
                    borderRadius: 10,
                  },
                  active === item && {
                    backgroundColor: '#1A1A1A',
                    color: '#FFFFFF',
                  },
                ]}
                onPress={() => handleActive(item)}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          //   marginVertical:1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // width: '85%',
            padding: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            borderWidth: 0.5,
          }}>
          <Feather name={'search'} size={25} style={{marginHorizontal: 10}} />
          <TextInput
            placeholder="Search for question ..."
            style={{flex: 1, fontSize: 18}}
          />
          <FontAwesome
            name={'microphone'}
            size={25}
            style={{marginRight: 10}}
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </ScrollView>
    </View>
  );
};

export default FAQs;

const styles = StyleSheet.create({});
