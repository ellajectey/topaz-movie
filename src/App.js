import { BeakerIcon } from "@heroicons/react/24/solid";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import Bookmarks from "./pages/bookmarks";
import Moviepage from "./pages/moviepage";
import Series from "./pages/series";
import Searchpage from "./pages/searchpage";


const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/movie", element: <Moviepage /> },
  { path: "/series", element: <Series /> },
  { path: "/bookmarks", element: <Bookmarks /> },
  { path: "/search", element: <Searchpage /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />

      {/* tailwindcss setup test
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
      {/* example of how you can use the heroicon the import can be seen above*/}
      {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
    </div>
  );
}

export default App;
