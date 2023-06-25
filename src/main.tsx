import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import About from './pages/About.tsx'
import './index.css'
import GlobalStyles from './styles/GlobalStyles.tsx'
import Intro from './pages/Intro/index.tsx'
import SendLetter from './pages/SendLetter/index.tsx'
import ViewLetter from './pages/ViewLetter/index.tsx'
import WriteLetter from './pages/WriteLetter/index.tsx'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

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
        path: '/write-letter',
        element: <WriteLetter />,
      },
      {
        path: '/send-letter',
        element: <SendLetter />,
      },
      {
        path: '/view-letter',
        element: <ViewLetter />,
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
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
