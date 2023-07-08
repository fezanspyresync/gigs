import {View, Text, Image, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Edit from '../../assets/Edit.svg';
import Editblack from '../../assets/Editblack.svg';
import Bookmark from '../../assets/Bookmark.svg';
import ClipboardApprove from '../../assets/ClipboardApprove.svg';
import CustomModal from '../components/Modal';
export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkCV, setCheckCV] = useState(false);
  const uploadHandler = () => {
    setIsModalOpen(true);
  };
  const CheckCVHandler = () => {
    setCheckCV(true);
  };

  const closeShowHandler = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setCheckCV(false);
    }, 20);
  }, [checkCV]);

  return (
    <View
      style={{
        flex: 1,
        padding: widthPercentageToDP('7%'),
        backgroundColor: '#ffffff',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: '28%',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={{height: 70, width: 70}}>
            <Image
              source={require('../../assets/thinking.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <Pressable
            style={{
              height: 20,
              width: 20,
              backgroundColor: '#EA6161',
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              top: -2,
              right: 15,
            }}>
            <Edit height={15} width={15} />
          </Pressable>
        </View>
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('4.5%'),
              fontWeight: 'bold',
            }}>
            Oussama Chahidi
          </Text>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.60)',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('4.5%'),
              fontWeight: 'bold',
            }}>
            Full Stack Developer
          </Text>
        </View>
      </View>
      {/*  */}
      <View
        style={{
          paddingTop: heightPercentageToDP(1),
          paddingHorizontal: widthPercentageToDP(4),
          height: heightPercentageToDP('20%'),
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.35)',
          marginTop: heightPercentageToDP(6),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 8,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              marginRight: 10,
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('5%'),
              alignSelf: 'flex-end',
              fontWeight: 'bold',
            }}>
            Skills
          </Text>
          <Editblack style={{position: 'relative', top: -1}} />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: widthPercentageToDP(3.5),
            fontWeight: '600',
            marginTop: 2,
            color: '#000',
          }}>
          Save your skills so you can get more opportunities if someone visited
          your profile
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontWeight: 'bold',
            fontSize: widthPercentageToDP(5),
            color: '#000',
            marginTop: heightPercentageToDP(3),
          }}>
          React, NodeJs, MongoDB,....
        </Text>
      </View>
      <View
        style={{
          paddingTop: heightPercentageToDP(1),
          paddingHorizontal: widthPercentageToDP(4),
          height: heightPercentageToDP('29%'),
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.35)',
          marginTop: heightPercentageToDP(3),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 8,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              marginRight: 10,
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('5%'),
              alignSelf: 'flex-end',
              fontWeight: 'bold',
            }}>
            Analyses
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: widthPercentageToDP(3.5),
            fontWeight: '600',
            marginTop: 2,
            color: '#000',
          }}>
          You see information about you jobs seeking journey
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: widthPercentageToDP('22%'),
            alignItems: 'center',
            marginTop: 5,
          }}>
          <View
            style={{
              flex: 1,
              alignSelf: 'stretch',
              borderRightWidth: 2,
              borderRightColor: 'rgba(0, 0, 0, 0.10)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ClipboardApprove style={{position: 'relative', left: -23}} />
          </View>
          <View
            style={{
              flex: 1,
              alignSelf: 'stretch',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Bookmark style={{position: 'relative', left: 15}} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 2,
            position: 'relative',
            top: -8,
          }}>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontWeight: 'bold',
              fontSize: widthPercentageToDP(4.5),
            }}>
            10 applied jobs
          </Text>
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontWeight: 'bold',
              fontSize: widthPercentageToDP(4.5),
            }}>
            5 saved jobs
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: heightPercentageToDP(1),
          paddingHorizontal: widthPercentageToDP(4),
          height: heightPercentageToDP('20%'),
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.35)',
          marginTop: heightPercentageToDP(3),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 8,
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              marginRight: 10,
              color: '#000',
              fontFamily: 'Poppins-Regular',
              fontSize: widthPercentageToDP('5%'),
              alignSelf: 'flex-end',
              fontWeight: 'bold',
            }}>
            CV
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: widthPercentageToDP(3.5),
            fontWeight: '600',
            marginTop: 2,
            color: '#000',
          }}>
          Your cv is saved to make you job application easier.
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // paddingHorizontal: widthPercentageToDP('8%'),
          }}>
          <Pressable
            onPress={uploadHandler}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'red',
              height: heightPercentageToDP('5%'),
              width: widthPercentageToDP('35%'),
              borderRadius: 10,
              backgroundColor: 'red',
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
              }}>
              Upload new CV
            </Text>
          </Pressable>
          <Pressable
            onPress={CheckCVHandler}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'red',
              height: heightPercentageToDP('5%'),
              width: widthPercentageToDP('35%'),
              borderRadius: 10,
              backgroundColor: checkCV ? 'red' : null,
            }}>
            <Text
              style={{color: checkCV ? '#ffff' : '#000', fontWeight: 'bold'}}>
              Check your CV
            </Text>
          </Pressable>
        </View>
      </View>
      {isModalOpen ? <CustomModal onClose={closeShowHandler} /> : null}
    </View>
  );
}
