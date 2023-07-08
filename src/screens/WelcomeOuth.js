import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AuthScreen from './AuthScreen';
import {CustomDrawerContent} from '../components/Drawer';
import DashboardLayout from '../../assets/DashboardLayout.svg';
import AuthProfile from './AuthProfile';
import Personalinfo from './Personalinfo';
import AuthDocument from './AuthDocument';
import SuccessScreen from './SuccessScreen';
import Profile from './Profile';

const Drawer = createDrawerNavigator();

export default function WelcomeOuth() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        overlayColor: null,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="user" component={AuthScreen} />
      <Drawer.Screen name="authProfile" component={AuthProfile} />
      <Drawer.Screen name="personalinfo" component={Personalinfo} />
      <Drawer.Screen name="documentuploadscreen" component={AuthDocument} />
      <Drawer.Screen name="SuccessScreen" component={SuccessScreen} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
}
