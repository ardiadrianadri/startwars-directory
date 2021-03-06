import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  name: '',
  picture: '',
  favorite: false,
  detailData: null,
  charactersList: [],
  planetsList: [],
  starshipsList: [],
};

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    detailRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    detailRequestSuccess: (state, action) => {
      const {name, favorite, picture, elementData, related } = action.payload;

      if (related.characters) {
        state.charactersList = related.characters;
      }

      if (related.planets) {
        state.planetsList = related.planets;
      }

      if (related.starships) {
        state.starshipsList = related.starships
      }

      state.name = name;
      state.picture = picture;
      state.favorite = favorite;
      state.detailData = elementData;
      state.loading = false;
    },
    detailRequestError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    cleanDetail: (state) => {
      state.name = '';
      state.picture = '';
      state.favorite = false;
      state.detailData = null;
      state.charactersList = [];
      state.planetsList = [];
      state.starshipsList = [];
    }
  }
});

export const { detailRequest, detailRequestError, detailRequestSuccess, cleanDetail } = detailSlice.actions;

export default detailSlice.reducer;
