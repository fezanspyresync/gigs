import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function Button({label, onPress, isMargin = true}) {
  return (
    <Pressable
      onPress={() => onPress()}
      android_ripple={true}
      style={{
        height: heightPercentageToDP('6.5%'),
        marginHorizontal: isMargin ? widthPercentageToDP(5) : null,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: '700',
          fontSize: widthPercentageToDP('5%'),
        }}>
        {label}
      </Text>
    </Pressable>
  );
}
