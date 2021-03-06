import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import { baseSelector, updateAmount } from '../slices/ratesReducer';

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
  font-size: 2.1rem;
  color: CadetBlue;
  margin-left: 10px;
  padding: 0.5rem;
`;

const Currency = styled.div`
  color: CadetBlue;
  font-size: 1.5em;
  padding: 0.4em;
  border-radius: 10px;
  border: 1px solid CadetBlue;
  background: white;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 13px;
`;

const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const baseCurrency = useSelector(baseSelector);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = ({ target }) => {
    let { value } = target;
    let amount = Number(value)
    if (Number.isNaN(amount) || amount === 0) {
      amount = 1;
    }
    dispatch(updateAmount(amount));
  };

  const formik = useFormik({
    initialValues: {
      rate: '',
    },
    validationSchema: Yup.object({
      rate: Yup.number().integer('Must be number').positive('Must be positive'),
    }),
    onChange: handleChange,
  });

  return (
    <StyledForm onChange={handleChange}>
      <Input
        type="text"
        ref={inputRef}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.rate}
        disabled={formik.isSubmitting}
        name="rate"
        placeholder='1'
      />
      {formik.errors.rate && <ErrorMessage>{formik.errors.rate}</ErrorMessage>}
      <Currency> 
        {baseCurrency}
      </Currency>
    </StyledForm>
  );
};

export default Form;
