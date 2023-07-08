import {View, Text, Alert, Pressable, ScrollView} from 'react-native';
import React from 'react';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AuthInput from '../components/AuthInput';
import Button from '../components/Button';
import JobList from '../components/JobList';
import AuthNavigation from '../components/AuthNavigation';

export default function AuthScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: widthPercentageToDP('4%'),
      }}>
      <AuthNavigation IsWelcome={true} />
      <View style={{marginTop: heightPercentageToDP(4)}}></View>
      <AuthInput placeholder={'job title, category'} />
      <AuthInput placeholder={'location'} />
      <View style={{marginTop: heightPercentageToDP(3)}}></View>
      <Button
        isMargin={false}
        label={'search'}
        onPress={() => Alert.alert('called')}
      />
      <Text
        style={{
          color: '#000',
          fontFamily: 'Poppins-Regular',
          fontWeight: '600',
          marginTop: heightPercentageToDP('5%'),
          paddingBottom: heightPercentageToDP('1%'),
        }}>
        Jobs List
      </Text>
      <ScrollView>
        <JobList />
        <JobList />
      </ScrollView>
    </View>
  );
}
