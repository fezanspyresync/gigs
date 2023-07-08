import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function JobList({onPress, name}) {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: 'rgba(217, 19, 19, 0.50)',
        paddingHorizontal: widthPercentageToDP(2),
        paddingVertical: heightPercentageToDP(1),
        borderRadius: 10,
        marginBottom: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontFamily: 'Poppins-Regular',
            fontWeight: 'bold',
          }}>
          ReactJs Developer
        </Text>
        <Pressable
          onPress={() => onPress(name)}
          style={{
            backgroundColor: '#EA5151',
            height: heightPercentageToDP('5%'),
            width: widthPercentageToDP('30%'),
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#ffffff', fontFamily: 'Poppins-Regular'}}>
            Apply
          </Text>
        </Pressable>
      </View>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Poppins-Regular',
          fontWeight: 'bold',
          marginBottom: 4,
        }}>
        C2M SYSTEM
      </Text>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Poppins-Regular',
          fontWeight: 'bold',
          marginBottom: 4,
        }}>
        job description
      </Text>
      <Text
        style={{
          color: '#000',
          fontFamily: 'Poppins-Regular',
          marginBottom: 4,
          paddingTop: 4,
          paddingRight: 20,

          fontSize: widthPercentageToDP('3.2%'),
        }}>
        Nous somme a la recherhe d'un developpement web qui a une maitrice dans
        les differents langage de programmation tel que : HTML CSS , PHP ,
        BOOSTRAP , REACT JS , NODEJS et d'atre langage de back-end et front end
      </Text>
    </View>
  );
}
