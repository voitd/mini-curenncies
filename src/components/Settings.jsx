import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import React from 'react';
import styled from 'styled-components';

import { updateAmount } from '../slices/ratesReducer';
import Select from './Select';
import Table from './Table';

const Main = styled.section`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2);
  height: 80vh;
  width: 50%;
  margin: 5%;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(2rem);
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;
  width: 82%;
`;

const Settings = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateAmount(1));
  }
  return (
    <Main>
      <SearchBar>
        <Select />
        <Link to="/" className="link" onClick={handleClick}>
          <FontAwesomeIcon
            className="star"
            icon={faTimesCircle}
            color={'CadetBlue'}
            size={'3x'}
          />
        </Link>
      </SearchBar>
      <Table isSettings={true} />
    </Main>
  );
};
export default Settings;
