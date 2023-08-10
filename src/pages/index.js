import { createBrowserRouter } from "react-router-dom";
import IndexLayout from "../layaouts/IndexLayout/IndexLayout";
import MainLayout from "../layaouts/MainLayout/MainLayout";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Proyects from "./Proyects/Proyects";
import Contact from "./Contact/Contact";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout />,
        children:[
            { path: '/home', element:<Home/>},
            { path: '/skills', element:<Skills/>},
            { path: '/proyects', element:<Proyects/>},
            { path: '/contact', element:<Contact/>},
        ]
    },
    // {
    //     path: '/',
    //     element: <MainLayout />,
    //     children:[
    //         { path: '/home', element:<Home/>},
    //         { path: '/skills', element:<Skills/>},
    //         { path: '/proyects', element:<Proyects/>},
    //         { path: '/contact', element:<Contact/>},
    //     ]
    // }
])