import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";

import NoFoundPage from "./pages/NoFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>

      <Route index element={<HomePage/>} />
      <Route path='/jobs' element={<JobsPage/>} />
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
      <Route path="*" element={<NoFoundPage/>}/>
    </Route>
)
)
const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
