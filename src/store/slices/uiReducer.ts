import { createSlice } from "@reduxjs/toolkit";

type UIState = {
  isShowPanelActive: boolean;
};

const initialState: UIState = {
  isShowPanelActive: false,
};

const uiSlice = createSlice({
  name: "showPanelUi",
  initialState,
  reducers: {
    toggleShowPanel: (state) => {
      state.isShowPanelActive = !state.isShowPanelActive;
    },
    setShowPanel: (state, action) => {
      state.isShowPanelActive = action.payload;
    },
  },
});

export const { toggleShowPanel, setShowPanel } = uiSlice.actions;
export default uiSlice.reducer;
