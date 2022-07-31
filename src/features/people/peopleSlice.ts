import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { Character } from 'features/api';

export interface PeopleState {
  map: { [id: string]: Character };
}

const initialState: PeopleState = {
  map: {},
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    updatePeople: (
      state,
      action: PayloadAction<{ id: string; person: Character }>
    ) => {
      const { id, person } = action.payload;
      state.map[id] = person;
    },
  },
});

export const { updatePeople } = counterSlice.actions;

export const selectPeople = (state: RootState) => state.people.map;

export default counterSlice.reducer;
