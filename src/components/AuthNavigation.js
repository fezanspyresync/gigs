import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Menu from '../../assets/Menu.svg';
import {useNavigation} from '@react-navigation/native';

export default function AuthNavigation({IsWelcome}) {
  const navigation = useNavigation();
  const backHandler = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: heightPercentageToDP('4%'),
      }}>
      {!IsWelcome ? (
        <Pressable onPress={backHandler} style={{height: 30, width: 30}}>
          <Image
            source={require('../../assets/return_button.png')}
            style={{height: '100%', width: '100%'}}
          />
        </Pressable>
      ) : null}

      <Text
        style={{
          color: '#000',
          fontFamily: 'Poppins-Regular',
          fontSize: widthPercentageToDP('4%'),
          fontStyle: 'normal',
          fontWeight: '600',
        }}>
        {IsWelcome ? (
          <Text>Welcome oussama chahidi</Text>
        ) : (
          <Text>oussama chahidi</Text>
        )}
      </Text>
      <Menu onPress={() => navigation.openDrawer()} />
    </View>
  );
}
