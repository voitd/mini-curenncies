import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';

import { updateAmount } from '../slices/ratesReducer';

const StyledForm = styled.form`
  padding: 0.5em;
  margin: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);
  background: white;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  width: 90%;
  font-size: 3rem;
  color: CadetBlue;
  margin-left: 10px;
`;

const Button = styled.button`
  display: inline-block;
  color: CadetBlue;
  font-size: 1.5em;
  padding: 0.5em;
  border-radius: 10px;
  border: 2px solid CadetBlue;
  display: block;
  background: white;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
`;

const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (values, actions) => {
    const { rate } = values;
    const { setSubmitting } = actions;
    dispatch(updateAmount(rate));
    setSubmitting(false);
  };

  const handleChange = (values, actions) => {
    const { rate } = values;
    console.log('rate ->', rate); // eslint-disable-line no-console
    dispatch(updateAmount(rate));
  };

  const formik = useFormik({
    initialValues: {
      rate: '',
    },
    validationSchema: Yup.object({
      rate: Yup.number('Must be number')
        .positive('Must be positive')
        // .required(),
    }),
    onSubmit: handleSubmit,
    onChange: handleChange,
  });

  return (
    <>
      <StyledForm onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          ref={inputRef}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rate}
          disabled={formik.isSubmitting}
          name="rate"
          placeholder="0"
        />
        {formik.errors.rate && <ErrorMessage>{formik.errors.rate}</ErrorMessage>}
        <Button type="submit" >
          Go!
        </Button>
      </StyledForm>
    </>
  );
};

export default Form;
