import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function AuthInput({placeholder, padd = true}) {
  return (
    <View style={{marginTop: 20}}>
      <TextInput
        placeholder={placeholder}
        style={{
          borderColor: '#E91818',
          borderWidth: 2,
          paddingHorizontal: padd ? widthPercentageToDP(4) : null,
          borderRadius: 10,
          fontSize: widthPercentageToDP(5),
        }}
      />
    </View>
  );
}
