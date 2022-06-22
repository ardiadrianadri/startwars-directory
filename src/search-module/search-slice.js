import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  charactersResults: [],
  charactersPagination: null,
  planetsResults: [],
  planetsPagination: null,
  starshipsResults: [],
  starshipsPagination: null,
  favoritesFilter: false,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchRequest: (state, action) => {
      const { favoritesFilter } = (action) ? action.payload : false;
      state.loading = true;
      state.error = null;
      state.favoritesFilter = favoritesFilter;
    },
    searchRequestSuccess: (state, action) => {
      const searchData = action.payload;

      if (searchData.characters) {
        state.charactersResults = searchData.characters.results;
        state.charactersPagination = searchData.characters.pagination;
      }

      if (searchData.planets) {
        state.planetsResults = searchData.planets.results;
        state.planetsPagination = searchData.planets.pagination;
      }

      if (searchData.starships) {
        state.starshipsResults = searchData.starships.results;
        state.starshipsPagination = searchData.starships.pagination;
      }

      state.loading = false;
    },
    searchRequestError: (state, action) => {
      const { title, message } = action.payload;

      state.error = { title, message }
      state.loading = false;
    }
  }
});

export const { searchRequest, searchRequestSuccess, searchRequestError } = searchSlice.actions;

export default searchSlice.reducer;
