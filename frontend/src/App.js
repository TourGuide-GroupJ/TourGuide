import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Attractions from "./pages/Attractions";
import Accomadation from "./pages/Accommodation";
import Festival from "./pages/Festival";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Hotel } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/attractions",
    element: <Attractions />,
  },
  {
    path: "/festival",
    element: <Festival />,
  },
  {
    path: "/accommodation",
    element: <Accomadation />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
