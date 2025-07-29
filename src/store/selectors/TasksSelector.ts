import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "..";
import type { Status } from "../../interfaces/task";

// Selector to get filtered tasks by status
export const selectFilteredTasks = createSelector(
  [
    (state: RootState) => state.Tasks.data,
    (_: RootState, status: Status | string) => status,
  ],
  (tasks, status) => tasks.filter((task) => task.status === status)
);

export const selectTasksLoading = (state: RootState) => state.Tasks.loading;
export const selectTasksError = (state: RootState) => state.Tasks.error;
