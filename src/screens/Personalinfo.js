import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Input from '../components/Input';
import AuthInput from '../components/AuthInput';
import Phoneinput from './Phoneinput';

export default function Personalinfo({navigation}) {
  const [cancel, setCancel] = useState(false);
  const [next, setNext] = useState(false);
  const cancelHandler = () => {
    setCancel(true);
  };
  const nextHandler = () => {
    navigation.navigate('documentuploadscreen');
  };

  useEffect(() => {
    setTimeout(() => {
      setCancel(false);
    }, 20);
  }, [cancel]);
  useEffect(() => {
    setTimeout(() => {
      setNext(false);
    }, 20);
  }, [next]);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Text
        style={{
          textAlign: 'center',
          color: '#000',
          fontFamily: 'Poppins-Regular',
          fontWeight: 'bold',
          fontSize: widthPercentageToDP('5%'),
          marginTop: heightPercentageToDP('3%'),
        }}>
        Application
      </Text>
      <Text
        style={{
          textAlign: 'center',
          color: 'rgba(0, 0, 0, 0.30)',
          fontFamily: 'Poppins-Regular',
          fontWeight: 'bold',
          fontSize: widthPercentageToDP('5%'),
          marginTop: heightPercentageToDP('3%'),
        }}>
        personal info
      </Text>
      <View
        style={{
          paddingHorizontal: widthPercentageToDP('8%'),
          marginTop: heightPercentageToDP('5%'),
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Inter',
            fontSize: widthPercentageToDP('5%'),
          }}>
          First name
        </Text>
        <AuthInput placeholder={'John'} />
      </View>
      <View
        style={{
          paddingHorizontal: widthPercentageToDP('8%'),
          marginTop: heightPercentageToDP('5%'),
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Inter',
            fontSize: widthPercentageToDP('5%'),
          }}>
          Last name
        </Text>
        <AuthInput placeholder={'Doe'} />
      </View>
      <View
        style={{
          paddingHorizontal: widthPercentageToDP('8%'),
          marginTop: heightPercentageToDP('5%'),
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Inter',
            fontSize: widthPercentageToDP('5%'),
          }}>
          Phone number
        </Text>
        <Phoneinput />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: widthPercentageToDP('8%'),
        }}>
        <Pressable
          onPress={cancelHandler}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'red',
            height: heightPercentageToDP('5%'),
            width: widthPercentageToDP('30%'),
            borderRadius: 10,
            backgroundColor: cancel ? 'red' : null,
          }}>
          <Text
            style={{color: cancel ? '#ffffff' : '#000', fontWeight: 'bold'}}>
            Cancel
          </Text>
        </Pressable>
        <Pressable
          onPress={nextHandler}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'red',
            height: heightPercentageToDP('5%'),
            width: widthPercentageToDP('30%'),
            borderRadius: 10,
            backgroundColor: 'red',
          }}>
          <Text
            style={{color: next ? '#ffffff' : '#ffffff', fontWeight: 'bold'}}>
            Next
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
