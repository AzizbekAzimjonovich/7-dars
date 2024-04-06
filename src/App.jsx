import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";
import MainLayut from "./layout/MainLayut";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/singlerecipe/:id",
          element: <SingleRecipe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
