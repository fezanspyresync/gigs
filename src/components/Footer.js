import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function Footer() {
  return (
    <View
      style={{
        height: heightPercentageToDP('21%'),
        width: widthPercentageToDP('100%'),
        justifyContent: 'flex-end',
      }}>
      <Image
        source={require('../../assets/buttomDesign.png')}
        style={{
          height: '80%',
          width: '100%',
          resizeMode: 'cover',
        }}
      />
    </View>
  );
}
