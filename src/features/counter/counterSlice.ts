import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchCount } from './counterAPI';

export interface CounterState {
  value: number;
}

const initialState: Array<CounterState> = [{
  value: 0,
}];

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state) => {
      state[ state.length] = state[ state.length - 1]
    },
    increment: (state, {payload: {index}}) => {
      state[index].value += 1;
    },
    decrement: (state, {payload: {index}}) => {
      state[index].value -= 1;
    },
  },

});

export const {addCounter, increment, decrement } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;


export default counterSlice.reducer;
