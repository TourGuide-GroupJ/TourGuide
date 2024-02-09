import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

// layouts
import AdminLayout from "./layouts/AdminLayout";

//First 6 components
import Attractions from "./pages/Attractions";
import Heritage from "./pages/Heritage";
import Festival from "./pages/Festival";
import Adventure from "./pages/Adventure";
import Wild from "./pages/Wild";
import Event from "./pages/Event";

//Second 6 components
import Accomadation from "./pages/Accommodation";
import GuideReg from "./pages/GuideReg";
import RentItems from "./pages/RentItems";

import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import AdminGuide from "./pages/AdminGuide";
import Guides from "./pages/Guides";
import GuideProf from "./pages/GuideProf";
import HotelReg from "./pages/HotelReg";
import AdminHotel from "./pages/AdminHotel";

//Adventure routes
import AeroplaneExperience from "./pages/AeroplaneExperience";
import KithulgalaRafting from "./pages/KithulgalaRafting";
import Kirigalpoththa from "./pages/Kirigalpoththa";
import BlueWhale from "./pages/BlueWhale";
import Dolukanda from "./pages/Dolukanda";
import YalaSafari from "./pages/YalaSafari";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { Hotel } from "@mui/icons-material";

const router = createBrowserRouter([
  //Navigation bar
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

  //First 6 components
  {
    path: "/attractions",
    element: <Attractions />,
  },
  {
    path: "/heritage",
    element: <Heritage />,
  },
  {
    path: "/festival",
    element: <Festival />,
  },
  {
    path: "/adventure",
    element: <Adventure />,
  },
  {
    path: "/wild",
    element: <Wild />,
  },
  {
    path: "/event",
    element: <Event />,
  },

  //Second 6 components
  {
    path: "/accommodation",
    element: <Accomadation />,
  },
  {
    path: "/Guides",
    element: <Guides />,
  },
  {
    path: "/rentItems",
    element: <RentItems />,
  },

  //Other pages
  {
    path: "/CreateAccount",
    element: <CreateAccount />,
  },
  {
    path: "/GuideReg",
    element: <GuideReg />,
  },
  {
    path: "/HotelReg",
    element: <HotelReg />,
  },
  {
    path: "/GuideProf",
    element: <GuideProf />,
  },
  {
    path: "/aeroplane",
    element: <AeroplaneExperience />,
  },
  {
    path: "/kithulgala",
    element: <KithulgalaRafting/>,
  },
  {
    path: "/kirigalpoththa",
    element: <Kirigalpoththa />,
  },
  {
    path: "/blueWhale",
    element: <BlueWhale />,
  },
  {
    path: "/dolukanda",
    element: <Dolukanda />,
  },
  {
    path: "/yala",
    element: <YalaSafari/>,
  },

  //Layout routs
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/adminGuide",
        element: <AdminGuide />,
      },
      {
        path: "/admin/adminHotel",
        element: <AdminHotel />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
