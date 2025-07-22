import Notes from "./pages/Notes/Notes";
import Base from "./pages/Base/Base";
import type { RouteObject } from "react-router-dom";
import Tasks from "./pages/tasks/Tasks";

export const appRoutes:RouteObject[] = [
    {path:'/' , element: <Base />},
     {
    path: '/notes',
    element: <Notes />
  },
     {
    path: '/tasks',
    element: <Tasks />
  },
]