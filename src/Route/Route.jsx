import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from '../Root/Root';
import About from '../Components/About/About';
import Gallery from '../Components/Gallery/Gallery';
import Dashboard from '../Components/Dashboard/Dashboard';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/about',
            element: <About></About>
        },
        {
            path:'/gallery',
            element: <Gallery></Gallery>
        },
        {
            path:'/dashboard',
            element: <Dashboard></Dashboard>
        },
        {
            path:'/contact',
            element: <Contact></Contact>
        }
    ]
  },
]);

export default Router