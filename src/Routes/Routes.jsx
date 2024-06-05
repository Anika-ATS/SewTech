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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        //   loader: () => fetch("http://localhost:3000/bags"),
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

  // {
  //   path: "dashboard",
  //   element: <DashBoardLayout></DashBoardLayout>,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "home",
  //       element: (
  //         <PrivateRoutes>
  //           <DashBoard></DashBoard>
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "dashboard/all-bags",
  //       element: (
  //         <PrivateRoutes>
  //           <AllBags></AllBags>
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "dashboard/add-bags",
  //       element: (
  //         <PrivateRoutes>
  //           <AddBag></AddBag>
  //         </PrivateRoutes>
  //       ),
  //     },
  //     {
  //       path: "dashboard/all-bags/edit/:id",
  //       element: (
  //         <PrivateRoutes>
  //           <EditBags></EditBags>
  //         </PrivateRoutes>
  //       ),

  //       loader: ({ params }) =>
  //         fetch(`http://localhost:3000/bags/${params.id}`),
  //     },
  //   ],
  // },
]);
