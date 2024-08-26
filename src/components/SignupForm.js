import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Xử lý đăng ký
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="firstName">Tên</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <div>
            <label htmlFor="lastName">Họ và Tên lót</label>
            <Field type="text" id="lastName" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Mật khẩu</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>

          <button type="submit">ĐĂNG KÝ</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
