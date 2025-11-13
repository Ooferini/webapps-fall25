import { configureStore, createSlice } from '@reduxjs/toolkit';
// think of slice like a specific useReducer/reducer function
const songSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    // name + '/' + functionName is how you access them
    addSong(state, action) {
      // redux-toolkit uses immer library so we can directly mutate state
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

// this is where you add yoour slices by keyname to your application-wide state/store
const store = configureStore({
  reducer: { songs: songSlice.reducer },
});

// make sure you export everything
// the compiled application state to access values elsewhere
export { store };
// destructure and export out the actions/function
export const { addSong, removeSong } = songSlice.actions;
