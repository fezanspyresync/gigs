import * as Yup from 'yup';

export const verifySchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\+?\d{8,}$/, 'Invalid phone number')
    .required('Phone number is required'),
});
