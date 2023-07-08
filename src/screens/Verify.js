import {View, Text} from 'react-native';
import React from 'react';
import Appbar from '../components/Appbar';
import Button from '../components/Button';
import Input from '../components/Input';
import Footer from '../components/Footer';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {verifySchema} from '../schema/verify';
import {Formik} from 'formik';

export default function Verify({route, navigation}) {
  const data = route.params;
  const backHandler = () => {
    navigation.goBack();
  };
  const navigationHandler = () => {
    navigation.navigate('receivecode');
  };
  return (
    <View style={{flex: 1}}>
      <Appbar data={backHandler} name={route.name} />
      <View
        style={{
          height: heightPercentageToDP('65%'),
          justifyContent: 'center',
        }}>
        <Formik
          initialValues={{
            phoneNumber: '',
          }}
          validationSchema={verifySchema}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('receivecode');
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
                placeholder={'Enter your phone number'}
                name="phoneNumber"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.phoneNumber}
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
              />
              <Button label={'Send verification code'} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
      <Footer />
    </View>
  );
}
