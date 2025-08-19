import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/layout'
import About from "./components/about/about"
import Home from './components/home/home'

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Layout/>,
  children:[
    {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element: <About/>
  }
]
}])



const App = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
