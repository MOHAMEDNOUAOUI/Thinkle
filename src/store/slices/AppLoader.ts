import { createSlice } from "@reduxjs/toolkit";

type LoaderState = {
  loading: boolean;
};

const initialState: LoaderState = {
  loading: true,
};

const AppLoaderSlice = createSlice({
  name: "App Loader",
  initialState,
  reducers: {
    setloadingState: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setloadingState } = AppLoaderSlice.actions;
export default AppLoaderSlice.reducer;
