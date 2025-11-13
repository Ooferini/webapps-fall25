import { configureStore } from '@reduxjs/toolkit';
import { movieReducer, addMovie, removeMovie } from './slices/movieSlice';
import { songReducer, addSong, removeSong } from './slices/songSlice';
import { reset } from './actions';

// this is where you add your slices by keyname to your applicaiton wide state/store
const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer,
  },
});

// here, once the slices have been combined into our store
// each slice is a key, the values inside are updatd by its reducers
// songSlice think of state as all things songState
// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// update our metaState aka store with dispatch.
// store.dispatch({ type: 'song/addSong', payload: 'Where is my mind?' });
// console.log(JSON.stringify(store.getState()));

// view an action creator from a slice
// console.log(songSlice.actions.addSong('Protect ya Neck'));
// this is dispatching that action creator we just wrote
// store.dispatch(songSlice.actions.addSong('Protect ya Neck'));

// // console.log(JSON.stringify(store.getState()));

// make sure you export all the things you need
// the compiled application state to access values elsewhere
export { store, reset, addSong, removeSong, addMovie, removeMovie };
// detructure and export out the actions/function from the compiled songSlice.actions (should be named .actionCreators)
// export const { addSong, removeSong } = songSlice.actions;
// export const { addMovie, removeMovie } = movieSlice.actions;
