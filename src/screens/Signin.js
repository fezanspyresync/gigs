import {View, Image, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import Appbar from '../components/Appbar';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Formik} from 'formik';
import {loginSchema} from '../schema/loginSchema';
import {onGoogleButtonPress} from '../Authication/google';
import {err} from 'react-native-svg/lib/typescript/xml';

export default function Signin({route, navigation}) {
  const googleHandler = async () => {
    try {
      const googleData = await onGoogleButtonPress();
      console.log('=====', googleData);
    } catch (error) {
      console.log(error);
    }
  };

  const backHandler = () => {
    navigation.goBack();
  };

  const navigationHandler = () => {
    navigation.navigate('welcomeOuth');
  };
  return (
    <View style={{flex: 1}}>
      <Appbar data={backHandler} name={route.name} />
      <ScrollView>
        <View style={{height: heightPercentageToDP('65%')}}>
          <ScrollView>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={loginSchema}
              onSubmit={values => {
                console.log(values);
                navigation.navigate('welcomeOuth');
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
                values,
              }) => (
                <>
                  <Input
                    placeholder={'E-mail'}
                    name="email"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                  />
                  <Input
                    placeholder={'Password'}
                    name="password"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                  />
                  <Button label={'create account'} onPress={handleSubmit} />
                </>
              )}
            </Formik>
            <Text
              style={{
                textAlign: 'center',
                marginTop: heightPercentageToDP('3%'),
                fontSize: widthPercentageToDP('4.5%'),
              }}>
              Already have an account?
              <Text style={{color: 'red'}}> sign in</Text>
            </Text>
            <Pressable
              onPress={googleHandler}
              style={{
                height: heightPercentageToDP('6.5%'),
                marginHorizontal: widthPercentageToDP(5),
                borderRadius: 10,

                marginTop: heightPercentageToDP('6%'),

                paddingHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'rgba(255, 0, 0, 0.38)',
                borderWidth: 2,
              }}>
              <View style={{height: 30, width: 30}}>
                <Image
                  source={require('../../assets/Google.png')}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: widthPercentageToDP('4%'),
                  marginLeft: widthPercentageToDP('20%'),
                }}>
                Sign in with google
              </Text>
            </Pressable>
          </ScrollView>
          <View />
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
