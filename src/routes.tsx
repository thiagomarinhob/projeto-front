import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layoutys/app'
import { AppClientLayout } from './pages/_layoutys/app-client'
import { AuthLayout } from './pages/_layoutys/auth'
import { NotFound } from './pages/404'
import { Appointment } from './pages/app/appointment/appointment'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { Schedule } from './pages/app/schedule/schedule'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { SignUpEstablishment } from './pages/auth/sign-up-establishment'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
      { path: '/schedule', element: <Schedule /> },
    ],
  },
  {
    path: '/',
    element: <AppClientLayout />,
    children: [{ path: '/appointment', element: <Appointment /> }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
      { path: '/sign-up-admin', element: <SignUpEstablishment /> },
    ],
  },
])
