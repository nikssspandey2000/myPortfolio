import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { About, Articles, Home, Qualifications } from './pages/index.js'
import Posts from './pages/articles/Posts.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
 { path: '/',
  element: <App />,
  errorElement: <div>Something went wrong! Check route paths and components.</div>, 
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/articles',
      element: <Articles />,
      
    },
    {
      path: '/articles/:id',
      element: <Posts />,
    },
    {
      path: '/qualifications',
      element: <Qualifications />,}
  ],
  
}
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
