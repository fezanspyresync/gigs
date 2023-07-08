import {View, Text, Image} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default function StartInfo({logo = null, label = null}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: heightPercentageToDP('8%'),
      }}>
      <View
        style={{
          height: heightPercentageToDP('10%'),
          width: heightPercentageToDP('10%'),
          backgroundColor: 'white',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={logo}
          style={{height: '70%', width: '70%', resizeMode: 'cover'}}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          paddingLeft: widthPercentageToDP('2.5%'),
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontFamily: 'Poppins-Regular',
            fontSize: widthPercentageToDP('4.6%'),
          }}>
          {label}
        </Text>
      </View>
    </View>
  );
}
