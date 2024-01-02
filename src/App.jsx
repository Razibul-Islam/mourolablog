import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Main from "./main/main";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Home/>}/>
      <Route path="blog" element={<div>This is blog</div>}/>
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
