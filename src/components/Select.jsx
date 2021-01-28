import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';

import { baseSelector, getRates, updateBase } from '../slices/ratesReducer';

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

const Input = styled.input`
  &:focus {
    outline: none;
  }
  border: none;
  width: 90%;
  font-size: 3rem;
  color: cadetblue;
  margin-left: 10px;
`;

const Button = styled.button`
  display: inline-block;
  color: cadetblue;
  font-size: 1.2em;
  padding: 0.5em;
  border-radius: 10px;
  border: 2px solid cadetblue;
  display: block;
  cursor: pointer;
  background: white;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  color: cadetblue;
  padding-left: 1rem;
`;

const StyledSelect = styled.select`
  &:focus {
    outline: none;
  }
  color: gray;
  padding-left: 0.5rem;
  font-size: 1.2rem;
  border: none;
  margin-left: 0.5rem;
  display: flex;
  option {
    background: white;
    display: flex;
    white-space: pre;
    min-height: 1rem;
    padding: 0px 2px 1px;
  }
  appearance: none;
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

  const handleChange = currency => {
    dispatch(getRates(currency));
  };
  const handleSubmit = currency => {
    dispatch(updateBase(currency));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label>
        <StyledText>Select currency:</StyledText>
        <StyledSelect value={baseCurrency} onChange={handleChange}>
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </StyledSelect>
      </Label>
      <Button type="submit">Get! </Button>{' '}
    </StyledForm>
  );
};

export default Select;
