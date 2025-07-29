import TaskFilter from "./slices/taskFilter";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiReducer";
import AppLoader from "./slices/AppLoader";
import TasksSlice from "./slices/TasksData";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    tasksFilter: TaskFilter,
    AppLoader: AppLoader,
    Tasks: TasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
