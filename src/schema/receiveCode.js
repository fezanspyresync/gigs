import * as Yup from 'yup';

export const receiveSchema = Yup.object().shape({
  numberField: Yup.number()
    .typeError('Invalid number')
    .required('Number is required'),
});
