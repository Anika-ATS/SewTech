import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Team from "../Pages/Team";
import Gallery from "../Pages/Gallery";
import About from "../Pages/About";
import Appointment from "../Components/Home/Appointment";

import PrivateRoutes from "../Routes/PrivateRoute/PrivateRoutes";

import WomensWear from "../Pages/ServicePages/WomensWear";
import OurServices from "../Pages/ServicePages/OurServices";
import Kids from "../Pages/ServicePages/Kids";
import Customize from "../Pages/ServicePages/Customize";
import DashboardLayout from "../Layouts/Dashboard/DashboardLayout";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AllMembers from "../Layouts/Dashboard/AllMembers";
import AddMember from "../Layouts/Dashboard/AddMember";
import EditMembar from "../Layouts/Dashboard/EditMembar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/membar"),
      },

      {
        path: "/About",
        element: <About></About>,
      },

      {
        path: "/Gallery",
        element: <Gallery></Gallery>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signin",
        element: <SignUp></SignUp>,
      },

      {
        path: "/Team",
        element: <Team></Team>,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRoutes message="to book an Appointment">
            <Appointment></Appointment>
          </PrivateRoutes>
        ),
      },

      // Allservices
      {
        path: "/Services",
        element: <OurServices></OurServices>,
      },

      {
        path: "/Adult",
        element: <WomensWear></WomensWear>,
      },

      {
        path: "/Kids",
        element: <Kids></Kids>,
      },

      {
        path: "/Customize",
        element: <Customize></Customize>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard/all-membars",
        element: (
          <PrivateRoutes>
            <AllMembers></AllMembers>
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard/add-membars",
        element: (
          <PrivateRoutes>
            <AddMember></AddMember>
          </PrivateRoutes>
        ),
      },
      {
        path: "dashboard/all-membars/edit/:id",
        element: (
          <PrivateRoutes>
            <EditMembar></EditMembar>
          </PrivateRoutes>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:3000/membar/${params.id}`),
      },
    ],
  },
]);
