import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import App from './App.tsx'

import './index.css'
import GlobalStyles from './styles/GlobalStyles.tsx'
import Intro from './pages/Intro/index.tsx'
import SendLetter from './pages/SendLetter/index.tsx'
import WriteLetter from './pages/WriteLetter/index.tsx'
import ViewLetter from './pages/ViewLetter/index.tsx'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import MyPage from './pages/myPage/index.tsx'

window.Kakao.init(import.meta.env.VITE_SHARE_KAKAO_LINK_KEY)
window.Kakao.isInitialized()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="intro" replace />,
      },
      {
        path: 'intro',
        element: <Intro />,
      },
      {
        path: 'write-letter',
        element: <WriteLetter />,
      },
      {
        path: 'send-letter',
        element: <SendLetter />,
      },
      {
        path: 'view-letter',
        element: <ViewLetter />,
      },
      {
        path: 'my-page',
        element: <MyPage />,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
