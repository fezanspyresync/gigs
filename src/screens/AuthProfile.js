import {View, Text, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AuthNavigation from '../components/AuthNavigation';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import JobList from '../components/JobList';

export default function AuthProfile({navigation}) {
  const [applyed, setAppled] = useState(true);
  const [saved, setSaved] = useState(false);

  const appliedHandler = () => {
    setAppled(true);
    setSaved(false);
  };
  const savedHandler = () => {
    setAppled(false);
    setSaved(true);
  };
  const navigateHandler = screen => {
    navigation.navigate(screen);
    console.log(screen);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <View style={{paddingHorizontal: widthPercentageToDP('4%')}}>
        <AuthNavigation IsWelcome={false} />
      </View>
      <View
        style={{
          marginTop: heightPercentageToDP('6%'),
          flexDirection: 'row',
          paddingLeft: widthPercentageToDP('8%'),

          height: heightPercentageToDP('4.5%'),
        }}>
        <Pressable
          onPress={appliedHandler}
          style={{
            alignSelf: 'stretch',
            justifyContent: 'center',
            borderBottomWidth: applyed ? 2 : 2,
            borderBottomColor: applyed ? '#F51313' : 'transparent',
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('4%'),
            }}>
            10 applied jobs
          </Text>
        </Pressable>
        <Pressable
          onPress={savedHandler}
          style={pressed => [
            {
              marginLeft: widthPercentageToDP('3%'),

              justifyContent: 'center',
              borderBottomWidth: saved ? 2 : 2,
              borderBottomColor: saved ? '#F51313' : 'transparent',
            },
          ]}>
          <Text
            style={{
              color: '#000000',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('4%'),
            }}>
            5 Saved Jobs
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'gray',
          position: 'relative',
          top: -0.5,
        }}></View>
      <View
        style={{
          paddingHorizontal: widthPercentageToDP('4%'),
          marginVertical: 10,
          flex: 1,
        }}>
        <ScrollView>
          <JobList onPress={navigateHandler} name="personalinfo" />
          <JobList />
          <JobList />
        </ScrollView>
      </View>
    </View>
  );
}
