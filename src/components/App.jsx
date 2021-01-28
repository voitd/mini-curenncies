import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import Routes from '../routes';
import Header from './Header';
import Footer from './Footer';

const Circle = styled.div`
  height: 25rem;
  width: 25rem;
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  position: absolute;
  z-index: -2;

  border-radius: 50%;
`;

const Circle1 = styled(Circle)`
  top: 3%;
  right: 15%;
`;

const Circle2 = styled(Circle)`
  bottom: 5%;
  left: 10%;
`;
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes />
      </Router>
      <Circle1 />
      <Circle2 />
      <Footer />
    </>
  );
}

export default App;
