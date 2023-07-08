import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import DashboardLayout from '../../assets/DashboardLayout.svg';

export default function DrawerItem({
  icon = <DashboardLayout />,
  label,
  onPress,
  name,
}) {
  return (
    <Pressable
      onPress={() => onPress(name)}
      android_ripple={true}
      style={({pressed}) => [
        {
          height: heightPercentageToDP(7),
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: widthPercentageToDP(12),
          marginBottom: heightPercentageToDP(1),
        },
        {backgroundColor: pressed ? '#7645' : null},
      ]}>
      {icon}
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontWeight: '700',
          fontSize: widthPercentageToDP(4),
          marginLeft: widthPercentageToDP(2),
        }}>
        {label}
      </Text>
    </Pressable>
  );
}
