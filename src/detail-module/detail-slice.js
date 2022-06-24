import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  detailData: null,
  charactersList: [],
  planetsList: [],
  starshipsList: [],
};

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    detailRequest: state => {
      state.loading = true;
      state.error = null;
    },
    detailRequestSuccess: (state, action) => {
      const { elementData, related } = action.payload;

      if (related.characters) {
        state.charactersList = related.characters;
      }

      if (related.planets) {
        state.planetsList = related.planets;
      }

      if (related.starships) {
        state.starshipsList = related.starships
      }

      state.detailData = elementData;
      state.loading = false;
    },
    detailRequestError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { detailRequest, detailRequestError, detailRequestSuccess } = detailSlice.actions;

export default detailSlice.reducer;
