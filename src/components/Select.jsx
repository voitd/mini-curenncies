import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  baseSelector,
  getRates,
  ratesSelector,
  updateBase,
} from '../slices/ratesReducer';

const StyledForm = styled.form`
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  // width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);

  background: white;
`;

const StyledText = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: cadetblue;
  padding-left: 1rem;
`;

const StyledSelect = styled.select`
  &:focus {
    outline: none;
  }
  padding-left: 0.5rem;
  font-size: 1.2rem;
  border: none;
  display: flex;
  option {
    background: white;
    display: flex;
    white-space: pre;
    min-height: 1rem;
  }
  cursor: pointer;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
`;
const Select = () => {
  const dispatch = useDispatch();
  const baseCurrency = useSelector(baseSelector);
  const rates = useSelector(ratesSelector);

 useEffect(() => {
    const fetchData = async () => {
      await dispatch(getRates(baseCurrency)).catch(err =>
        console.error(err),
      );
    };
    fetchData();
  }, [dispatch, baseCurrency]);

  const handleChange = ({target}) => {
    const { value } = target
    dispatch(updateBase(value));
  };

  return (
    <StyledForm >
      <Label>
        <StyledText>Select currency:</StyledText>
        <StyledSelect value={baseCurrency} onChange={handleChange}>
          {Object.keys(rates).map((curr, i) => (
            <option key={i} value={curr}>
              {curr}
            </option>
          ))}
        </StyledSelect>
      </Label>
      {/* <Button type="submit">Get!</Button> */}
    </StyledForm>
  );
};

export default Select;
