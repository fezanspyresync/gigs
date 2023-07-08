import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import StartInfo from '../components/StartInfo';

export default function Welcome({navigation}) {
  const [candidateBtnColor, setCandidateBtnColor] = React.useState(true);
  const [reBtnColor, setReBtnColor] = React.useState(false);
  const candidateHandler = () => {
    setCandidateBtnColor(true);
    setReBtnColor(false);
    navigation.navigate('signup');
  };
  const reHandler = () => {
    setCandidateBtnColor(false);
    setReBtnColor(true);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E13E3E',
        paddingVertical: heightPercentageToDP('4%'),
      }}>
      <View style={{marginBottom: heightPercentageToDP('4%')}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: widthPercentageToDP('8%'),
            color: 'white',
            fontFamily: 'Poppins-Regular',
            letterSpacing: widthPercentageToDP('2'),
            fontWeight: '700',
          }}>
          Gigs
        </Text>
      </View>
      {/*  */}
      <Text
        style={{
          color: '#FFF',
          textAlign: 'center',
          fontSize: widthPercentageToDP('5.4%'),
          fontFamily: 'Poppins-Regular',

          fontWeight: '700',
          fontStyle: 'italic',
        }}>
        You can find your dream job here!
      </Text>

      {/*  */}

      <View
        style={{
          flex: 0.8,
          paddingHorizontal: widthPercentageToDP('5%'),
          paddingVertical: heightPercentageToDP('12%'),
        }}>
        <StartInfo
          logo={require('../../assets/JobSeeker.png')}
          label={
            'Search for the job in different catgories, choose the one that category and place that suits you'
          }
        />
        <StartInfo
          logo={require('../../assets/CV.png')}
          label={
            'Build a profesional resume, that attracts recruters for better oppertunities.'
          }
        />
        <StartInfo
          logo={require('../../assets/GroupTask.png')}
          label={
            'Stay in touch with recruters, to know from them and have more chancs.'
          }
        />
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingHorizontal: widthPercentageToDP('2%'),
        }}>
        <Pressable
          onPress={candidateHandler}
          style={({pressed}) => [
            {
              width: '48%',
              height: heightPercentageToDP('6.5%'),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: candidateBtnColor ? '#ffffff' : '#E13E3E',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'white',
            },
          ]}>
          <Text
            style={{
              color: candidateBtnColor ? '#E13E3E' : '#ffffff',
              fontFamily: 'Poppins-Regular',
              fontWeight: '700',
              fontSize: widthPercentageToDP('4%'),
            }}>
            Start as a condidate
          </Text>
        </Pressable>
        <Pressable
          onPress={reHandler}
          style={({pressed}) => [
            {
              width: '48%',
              height: heightPercentageToDP('6.5%'),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: reBtnColor ? '#ffffff' : '#E13E3E',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'white',
            },
          ]}>
          <Text
            style={{
              color: reBtnColor ? '#E13E3E' : '#ffffff',
              fontFamily: 'Poppins-Regular',
              fontWeight: '700',
              fontSize: widthPercentageToDP('4%'),
            }}>
            Start as a recruiter
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
