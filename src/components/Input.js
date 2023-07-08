import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {err} from 'react-native-svg/lib/typescript/xml';

export default function Input({
  placeholder,
  handleBlur,
  handleChange,
  value,
  error,
  touched,
  name,
}) {
  console.log(touched, error);
  return (
    <View
      style={{
        paddingHorizontal: widthPercentageToDP(5),
        marginBottom: heightPercentageToDP('5%'),
      }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        style={{
          borderColor: 'rgba(255, 0, 0, 0.38)',
          borderWidth: 2,
          borderRadius: 10,
          paddingHorizontal: widthPercentageToDP('5%'),
          fontSize: widthPercentageToDP('5%'),
        }}
      />
      {touched && error && <Text style={{color: 'red'}}>{error}</Text>}
    </View>
  );
}
