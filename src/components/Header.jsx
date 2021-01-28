import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
const StyledHeader = styled.header`
  height: 5vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  background: white;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 0 50px rgba(0, 0, 0, 0.2);

  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  backdrop-filter: blur(2rem);
`;

const Title = styled.h1`
  // font-size: 1.5rem;
  color: cadetblue;
  padding: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Title>
        <FontAwesomeIcon icon={faCoins} color={'gold'} fixedWidth />
        Mini Ecxange Rates
      </Title>
    </StyledHeader>
  );
};

export default Header;
