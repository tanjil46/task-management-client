import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Roots from './General Components/Roots'
import Home from './Homepage/Home'
import Resister from './General Components/Resister'
import Authprovider from './General Components/Authprovider'
import Login from './General Components/Login'
import Dashboard from './Dashboard/Dashboard'
import Profile from './Dashboard/Profile'
import CreateTask from './Dashboard/CreateTask'
import ManageTask from './Dashboard/ManageTask'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PrivateRoute from './General Components/PrivateRoute'
import Contact from './General Components/Contact'


const queryClient = new QueryClient()
 const router=createBrowserRouter([
     {
      path:'/',
      element:<Roots></Roots>,
      children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'/resister',
        element:<Resister></Resister>
       },
       {
        path:'/login',
        element:<Login></Login>
       },
       {
        path:'/contact',
        element:<Contact></Contact>
       }
     ]
     },
     {
       
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'profile',
          element:<Profile></Profile>
        },
        {
          path:'create',
          element:<CreateTask></CreateTask>
        },
        {
          path:'manage',
          element:<ManageTask></ManageTask>
        }
      ]











     }

 ])


















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
    <div className="max-w-6xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
    </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>,
)
