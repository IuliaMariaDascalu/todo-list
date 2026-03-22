import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "/tasks", Component: Tasks}
  ]);