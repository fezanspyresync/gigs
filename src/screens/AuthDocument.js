import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Upload from '../../assets/Upload.svg';
import Modal from '../components/Modal';
import CustomModal from '../components/Modal';

export default function AuthDocument({navigation}) {
  const [cancel, setCancel] = useState(false);
  const [next, setNext] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const modalShowHandler = () => {
    setIsShow(true);
  };
  const closeShowHandler = () => {
    setIsShow(false);
  };
  const cancelHandler = () => {
    setCancel(true);
  };
  const nextHandler = () => {
    navigation.navigate('SuccessScreen');
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
        Your CV
      </Text>
      <View
        style={{
          flex: 1,

          paddingHorizontal: widthPercentageToDP('8%'),
        }}>
        <View
          style={{
            height: heightPercentageToDP('55%'),
            backgroundColor: '#D9D9D9',
            marginTop: heightPercentageToDP('3%'),
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: widthPercentageToDP('3%'),
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('4%'),
              fontWeight: '700',
            }}>
            Upload an other cv!
          </Text>
          <Pressable onPress={modalShowHandler}>
            <Upload />
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
            marginTop: heightPercentageToDP('1%'),
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
      {isShow ? <CustomModal onClose={closeShowHandler} /> : null}
    </View>
  );
}
