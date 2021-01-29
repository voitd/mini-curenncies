import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';

export const getRates = createAsyncThunk(
  'currency/getRates',
  async defaultCurrency => {
    const API_URL = `https://api.exchangeratesapi.io/latest?base=${defaultCurrency}`;
    const { data } = await axios.get(API_URL);
    return data;
  },
);

const { actions, reducer } = createSlice({
  name: 'currency',
  initialState: {
    base: 'USD',
    favorites: ['JPY', 'EUR', 'PLN'],
    amount: 1,
    rates: {},
  },
  reducers: {
    updateAmount(state, { payload }) {
      state.amount = payload;
    },
    updateBase(state, { payload }) {
      state.base = payload;
    },
    toggleFavorites(state, { payload }) {
      const { favorites } = state;
      if (favorites.includes(payload)) {
        state.favorites = favorites.filter(el => el !== payload);
      } else {
        state.favorites.push(payload);
      }
    },
  },
  extraReducers: {
    [getRates.fulfilled]: (state, { payload }) => {
      const { rates } = payload;
      state.rates = { ...rates };
    },
  },
});

export default reducer;
export const { updateAmount, updateBase, toggleFavorites } = actions;

export const ratesSelector = state => {
  const {
    currency: { favorites, rates },
  } = state;
  const getFavorites = _.pick(rates, favorites);
  const omitFavorites = _.omit(rates, favorites);
  return { ...getFavorites, ...omitFavorites };
};

export const baseSelector = state => state.currency.base;
export const favoritesSelector = state => state.currency.favorites;
export const amountSelector = state => state.currency.amount;
