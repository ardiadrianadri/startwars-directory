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
  filters: null,
  lastSearch: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchRequest: (state, action) => {
      const { filters, lastSearch, updateFavorites } = (action) ? action.payload : false;
      state.loading = true;
      state.error = null;
  
      if (!updateFavorites) {
        state.charactersResults = [];
        state.planetsResults = [];
        state.starshipsResults = [];
      }

      state.filters = {...filters};
      state.lastSearch = lastSearch;
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
    },
    cleanSearch: (state) => {
      state.charactersResults = [];
      state.planetsResults = [];
      state.starshipsResults = [];
      state.charactersPagination = null;
      state.planetsPagination = null;
      state.starshipsPagination = null;
    }
  }
});

export const { searchRequest, searchRequestSuccess, searchRequestError, cleanSearch } = searchSlice.actions;

export default searchSlice.reducer;
