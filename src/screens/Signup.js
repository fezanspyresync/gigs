import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import Appbar from '../components/Appbar';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import {Formik} from 'formik';
import {signUpSchema} from '../schema/signup';

export default function Signup({route, navigation}) {
  console.log('===============', route);

  const backHandler = () => {
    navigation.goBack();
  };

  const navigationHandler = handleSubmit => {};
  const data = route.params;
  return (
    <View style={{flex: 1}}>
      <Appbar data={backHandler} name={route.name} />
      <ScrollView>
        <View style={{height: heightPercentageToDP('65%')}}>
          <ScrollView>
            <View>
              <Formik
                initialValues={{
                  fullname: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                }}
                validationSchema={signUpSchema}
                onSubmit={values => {
                  console.log(values);
                  navigation.navigate('verify');
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
                      name="fullname"
                      placeholder={'Full Name'}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      value={values.fullname}
                      error={errors.fullname}
                      touched={touched.fullname}
                    />
                    <Input
                      name="email"
                      placeholder={'E-mail'}
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
                    <Input
                      placeholder={'Confirm Password'}
                      name="confirmPassword"
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      value={values.confirmPassword}
                      error={errors.confirmPassword}
                      touched={touched.confirmPassword}
                    />
                    <Button label={'create account'} onPress={handleSubmit} />
                  </>
                )}
              </Formik>
            </View>
            <Text
              style={{
                textAlign: 'center',
                marginTop: heightPercentageToDP('3%'),
                fontSize: widthPercentageToDP('4.5%'),
              }}>
              Already have an account?
              <Text style={{color: 'red'}}> sign in</Text>
            </Text>
          </ScrollView>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
