import {View, Text, Pressable, Modal} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {BlurView} from '@react-native-community/blur';

export default function CustomModal({onClose}) {
  return (
    <Modal visible={true} transparent={true}>
      <View style={{flex: 1}}>
        <BlurView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          blurType="light"
          blurAmount={10}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              height: heightPercentageToDP('24%'),
              width: widthPercentageToDP('75%'),
              backgroundColor: 'white',
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,

              borderColor: 'rgba(0, 0, 0, 0.35)',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 10,
            }}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Inter',
                fontSize: widthPercentageToDP('4.3%'),
                fontWeight: '700',
              }}>
              Upload a CV
            </Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  height: heightPercentageToDP(6),
                  borderRadius: 5,
                  overflow: 'hidden',
                  marginTop: heightPercentageToDP('1%'),
                }}>
                <View
                  style={{
                    backgroundColor: '#E85B5B',
                    width: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#fff'}}>FILE</Text>
                </View>
                <Pressable
                  style={{
                    backgroundColor: '#D9D9D9',
                    width: '80%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingLeft: 10,
                  }}>
                  <Text>No file chosen</Text>
                </Pressable>
              </View>
              <Pressable
                onPress={onClose}
                style={{
                  height: heightPercentageToDP(6),
                  backgroundColor: '#E85B5B',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: heightPercentageToDP('2%'),
                }}>
                <Text
                  style={{
                    fontFamily: 'Inter',
                    color: '#fff',
                    fontSize: widthPercentageToDP('4.0%'),
                  }}>
                  Upload
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
