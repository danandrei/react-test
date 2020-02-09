import React from 'react';
import { Formik } from 'formik';

const SignupForm = params => (
  <div>
    <h1>Sign up</h1>
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={values => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Required';
        }

        if (!values.name) {
          errors.name = 'Required';
        }

        if (!values.password) {
          errors.password = 'Required';
        }

        return errors;
      }}
      onSubmit={params.handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        status,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nameInput">name</label>
            <input
              id="nameInput"
              className="form-control"
              type="name"
              name="name"
              placeholder="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && (
              <p className="f-14 text-danger">{errors.name}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input
              id="emailInput"
              className="form-control"
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <p className="f-14 text-danger">{errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              id="passwordInput"
              className="form-control"
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <p className="f-14 text-danger">{errors.password}</p>
            )}
          </div>
          <br />
          {errors.password && touched.password && errors.password}
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
          {status && status.error && (
            <p className="text-center">{status.error}</p>
          )}
        </form>
      )}
    </Formik>
  </div>
);

export default SignupForm;
