import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import {
  amountSelector,
  baseSelector,
  favoritesSelector,
  ratesSelector,
  toggleFavorites,
} from '../slices/ratesReducer';

library.add(fasStar, farStar);

const StyledTable = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  padding-bottom: 2rem;
  width: 90%;
  font-size: 2rem;
  overflow-y: auto;
`;

const List = styled.ul`
  overflow-y: auto;
  list-style: none;
  width: 90%;

&::-webkit-scrollbar {
    display: none;
}
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  flex-grow: 1;
`;
const TextBold = styled.b`
  padding: 0 0.5rem;
`;

const Table = ({ isSettings }) => {
  const dispatch = useDispatch();
  const rates = useSelector(ratesSelector);
  const favorites = useSelector(favoritesSelector);
  const amount = useSelector(amountSelector);
  const baseCurrency = useSelector(baseSelector);

  const coll = isSettings ? rates : _.pick(rates, favorites);

  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(toggleFavorites(id.toString()));
  };

  return (
    <StyledTable>
      <List>
        {Object.entries(coll).map(([curr, rate]) => {
          const actualAmount = rate * (amount === '' ? 1 : amount)
          const actualRate = !isSettings ? actualAmount : rate;
          const isFavorite = favorites.includes(curr);

          // const icon = isFavorite ? fasStar : farStar;
          const color = isFavorite ? 'gold' : 'gray';

          return (
            <Item key={curr}>
              <Text>{curr}</Text>
              <TextBold>{actualRate.toFixed(2).toString()} </TextBold>
              {baseCurrency}
              {/* <Text> */}
              {isSettings && (
                <FontAwesomeIcon
                  role="button"
                  icon={farStar}
                  color={color}
                  id={curr}
                  onClick={handleClick}
                  style={{ marginLeft: '10px' }}
                />
              )}
              {/* </Text> */}
            </Item>
          );
        })}
      </List>
    </StyledTable>
  );
};

export default Table;

// {coll.map((curr, i) => {
