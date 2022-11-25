import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import { AppLayout } from './containers/app-layout';

import 'antd/dist/reset.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppLayout>
      <RouterProvider router={router} />
    </AppLayout>
  </React.StrictMode>
)
