import React from 'react';

import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Develop by <b>voitd</b>
      </p>
      <p>
        As for the API
        <a href="https://exchangeratesapi.io/">
          <b> exchangeratesapi.io </b>
        </a>
        is used.
      </p>
    </StyledFooter>
  );
};

export default Footer;
