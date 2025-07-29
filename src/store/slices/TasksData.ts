import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../../interfaces/task";

type TasksDataState = {
  loading: boolean;
  data: Task[];
  error: string;
};

const initialState: TasksDataState = {
  loading: true,
  data: [],
  error: "",
};

const TasksDataSlice = createSlice({
  name: "Tasks Data",
  initialState,
  reducers: {
    setTasksData: (state, action: PayloadAction<Task[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setAll: (state, action: PayloadAction<TasksDataState>) => {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
});

export const { setTasksData, setLoading, setError, setAll } =
  TasksDataSlice.actions;
export default TasksDataSlice.reducer;
