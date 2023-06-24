import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import About from './pages/About.tsx'
import './index.css'
import SendLetter from './pages/SendLetter/index.tsx'
import GlobalStyles from './styles/GlobalStyles.tsx'
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
      {
        path: '/sendLetter',
        element: <SendLetter />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
