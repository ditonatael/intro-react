import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/index.jsx'
import ExperiencePage from './pages/experience/index.jsx'
import ProjectPage from './pages/MyProject/index.jsx'
import Skills from './pages/skills/index.jsx'

const routerComponent = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path:'/',
        element: <HomePage/>,
      },
      {
        path:'/experience',
        element:<ExperiencePage/>
      },
      {
        path:'/myproject',
        element:<ProjectPage/>
      },
      {
        path:'/skills',
        element:<Skills/>
      }
    ]
  }  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerComponent} />
  </React.StrictMode>,
)
