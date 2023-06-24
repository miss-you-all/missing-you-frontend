import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import About from './pages/About.tsx'
import './index.css'
import Intro from './pages/Intro/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/intro',
        element: <Intro />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
