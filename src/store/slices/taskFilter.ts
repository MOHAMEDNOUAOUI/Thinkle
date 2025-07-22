import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export const TaskFilterItems = {
  Board: "Board",
  List: "List",
  Roadmap: "Roadmap",
  Project: "Project",
} as const;

export type TaskFilter = (typeof TaskFilterItems)[keyof typeof TaskFilterItems];

type UIState = {
  activepanel: TaskFilter;
};

const initialState: UIState = {
  activepanel: TaskFilterItems.Board,
};

const taskSlice = createSlice({
  name: "setTaskPanelActive",
  initialState,
  reducers: {
    setFilterPanel: (state, action: PayloadAction<TaskFilter>) => {
      state.activepanel = action.payload;
    },
  },
});

export const { setFilterPanel } = taskSlice.actions;
export default taskSlice.reducer;
