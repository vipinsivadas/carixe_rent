import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage';
import Carmodel,{loader as carlistLoader} from './Pages/Carmodel';
import Home from './Pages/Home';
import Service from './Pages/Service';
import ContactPage from './Pages/ContactPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import store from './App/Store'
import { Provider } from 'react-redux'
import SingleCarlistPage, {loader as singleCarlistLoader} from './Pages/SingleCarlistPage';
import BookingPage from './Pages/BookingPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path: 'carmodel',
        element:<Carmodel/>,
        loader:carlistLoader
      },
      {
        path:'carmodel/:carlistId',
        element: <SingleCarlistPage/>,
        loader: singleCarlistLoader
      },
      {
       path:'service',
       element:<Service/>
      },
      {
       path:'booking',
       element:<BookingPage/>
      },
      {
        path:'contact',
        element:<ContactPage/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'/login/signup',
        element:<Signup/>
      }
       
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>,
)
