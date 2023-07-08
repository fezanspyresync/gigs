import {View, Text} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import {receiveSchema} from '../schema/receiveCode';
import {Formik} from 'formik';

export default function ReceiveCode({navigation}) {
  const navigationHandler = () => {
    navigation.navigate('signin');
  };
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          height: heightPercentageToDP('12%'),
          marginBottom: heightPercentageToDP(2),
          color: '#000',
          fontSize: widthPercentageToDP(5),
          fontFamily: 'Poppins-Regular',
          fontWeight: '700',
          textAlign: 'center',
          paddingTop: heightPercentageToDP('3'),
        }}>
        Enter the received code
      </Text>

      <View
        style={{
          height: heightPercentageToDP('65%'),
          justifyContent: 'center',
        }}>
        <Formik
          initialValues={{
            numberField: '',
          }}
          validationSchema={receiveSchema}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('signin');
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
                placeholder={'Code'}
                name="numberField"
                handleBlur={handleBlur}
                handleChange={handleChange}
                value={values.numberField}
                error={errors.numberField}
                touched={touched.numberField}
              />
              <Button label={'Verify account'} onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </View>
      <Footer />
    </View>
  );
}
