import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {ImageBackground, View, Image, Pressable, Text} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import CloseDrawer from '../../assets/MacOSClose.svg';
import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect, useState} from 'react';
import {DrawerActions} from '@react-navigation/native';
import Account from '../../assets/Account.svg';
import TermsandConditions from '../../assets/TermsandConditions.svg';
import JobSeeker from '../../assets/JobSeeker.svg';
import OnlineSupport from '../../assets/OnlineSupport.svg';
import LogoutRounded from '../../assets/LogoutRounded.svg';
import DrawerItem from './DrawerItem';
export function CustomDrawerContent(props) {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  const navigationHandler = screen => {
    navigation.navigate(screen);
  };

  useLayoutEffect(() => {
    setIndex(-111);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: '100%',
          width: '53%',
          alignSelf: 'flex-end',
        }}>
        <Image
          source={require('../../assets/drawer.png')}
          style={{
            height: '100%',
            resizeMode: 'cover',
            width: '100%',
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          height: '100%',
          width: '100%',
        }}>
        <Pressable
          android_ripple={true}
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',

            paddingHorizontal: heightPercentageToDP('1%'),
            marginTop: heightPercentageToDP('2%'),
          }}>
          <CloseDrawer />
        </Pressable>
        <View
          style={{
            height: heightPercentageToDP('10.8%'),
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: widthPercentageToDP(8),
            marginBottom: heightPercentageToDP(15),
          }}>
          <View
            style={{
              height: 70,
              width: 70,
              borderRadius: 100,
            }}>
            <Image
              source={require('../../assets/thinking.png')}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontWeight: '600',
              color: '#000',
              marginLeft: widthPercentageToDP('2%'),
            }}>
            oussama chahidi
          </Text>
        </View>
        <View
          style={{
            flex: 1,

            justifyContent: 'space-between',
          }}>
          <View>
            <DrawerItem
              label={'Dashboard'}
              onPress={navigationHandler}
              name="authProfile"
            />
            <DrawerItem
              icon={<Account />}
              label={'Profile'}
              onPress={navigationHandler}
              name="profile"
            />
            <DrawerItem icon={<JobSeeker />} label={'Terms and Policies'} />
            <DrawerItem icon={<Account />} label={'Last Offers'} />
            <DrawerItem icon={<OnlineSupport />} label={'Help center'} />
          </View>
          <Pressable
            style={{
              paddingLeft: widthPercentageToDP(12),

              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: heightPercentageToDP(4),
            }}>
            <LogoutRounded />
            <Text
              style={{
                color: '#000',
                fontFamily: 'Poppins-Regular',
                fontWeight: '700',
                marginLeft: widthPercentageToDP(2),
                fontSize: widthPercentageToDP(4),
              }}>
              Logout
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
