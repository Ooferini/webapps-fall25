import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    // name + '/' + functionName is how you access them
    // action.type generated = 'movie/addMovie'
    // this is the action.type that is generated behind the scenes by actionCreator
    addMovie(state, action) {
      // redux toolkit uses immer library! thats why you can
      // directly mutate state cringe
      state.push(action.payload);
    },
    removeMovie(state, action) {
      // action.payload is the name of the song we want to remove
      // get the index of the movie passed via payload
      const index = state.indexOf(action.payload);
      // Array.splice() - vanilla js command
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    // think of this as an action type listener,
    // first arg is the string action type to listen for
    // second arg is the mini reducer to execute
    builder.addCase('app/reset', (state, action) => {
      return [];
    });
  },
});

export const movieReducer = movieSlice.reducer;
export const { addMovie, removeMovie } = movieSlice.actions;
