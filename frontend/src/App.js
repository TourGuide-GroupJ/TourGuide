import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Attractions from "./pages/Attractions";
import Accomadation from "./pages/Accommodation";
import Festival from "./pages/Festival";
import GuideReg from './pages/GuideReg';
import Login from './pages/Login'; 
import CreateAccount from './pages/CreateAccount';
import Admin from './pages/Admin'; 
import Guides from './pages/Guides';
import GuideProf from "./pages/GuideProf";

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
  {
    path:"/CreateAccount",
    element: <CreateAccount/>,
  },
  {
    path:"/GuideReg",
    element:<GuideReg/>,
  },
  {
    path:"/Admin",
    element:<Admin/>,
  },
  {
    path:"/Guides",
    element:<Guides/>,
  },
  {
    path:"/GuideProf",
    element:<GuideProf/>,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
