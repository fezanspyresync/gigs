import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function Appbar({data, name}) {
  const navigation = useNavigation();

  const navigateHandler = () => {
    data();
  };
  console.log(data);

  return (
    <View
      style={{
        paddingHorizontal: widthPercentageToDP(7),
        height: heightPercentageToDP('12%'),
        marginBottom: heightPercentageToDP('2%'),
        flexDirection: 'row',
      }}>
      <View style={{flex: 0.4, justifyContent: 'center'}}>
        <Pressable style={{height: 35, width: 35}} onPress={navigateHandler}>
          <Image
            source={require('../../assets/return_button.png')}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </Pressable>
      </View>
      <View style={{flex: 0.6, justifyContent: 'center'}}>
        <Text
          style={{
            color: '#000',
            fontSize: widthPercentageToDP(5),
            fontFamily: 'Poppins-Regular',
            fontWeight: '700',
          }}>
          {name}
        </Text>
      </View>
    </View>
  );
}
