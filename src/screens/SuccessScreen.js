import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Checkmark from '../../assets/Checkmark.svg';

export default function SuccessScreen({navigation}) {
  const navigationHandler = () => {
    navigation.navigate('user');
  };
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
      <View
        style={{
          flex: 0.7,
          paddingHorizontal: widthPercentageToDP('8%'),

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Checkmark />
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
            fontSize: widthPercentageToDP('6.8%'),
            fontWeight: 'bold',
          }}>
          {`Your application process
 is completed 
click validate to confirm`}
        </Text>
      </View>
      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: widthPercentageToDP('8%'),
        }}>
        <Pressable
          onPress={navigationHandler}
          style={{
            height: heightPercentageToDP('5%'),
            width: '100%',
            backgroundColor: '#50944A',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: heightPercentageToDP('4%'),
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('3.8%'),
            }}>
            Validate
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
