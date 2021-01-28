import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import styled from 'styled-components';

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
  width: 90%;
`;

const Wrapper = styled.div`
  padding: 0.8em;
  margin: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Settings = () => {
  return (
    <Main>
      <SearchBar>
        <Select />
        <Link to="/" className="link">
          {/* <Wrapper> */}
          <FontAwesomeIcon
            className="star"
            icon={faTimesCircle}
            color={'CadetBlue'}
            size={'3x'}
          />
          {/* </Wrapper> */}
        </Link>
      </SearchBar>
      <Table isSettings={true} />
    </Main>
  );
};
export default Settings;
