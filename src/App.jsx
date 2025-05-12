import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
import Link from './pages/link';
import RedirectLink from './pages/redirect-link';
import './index.css'
import UrlProvider from './context';
import RequireAuth from './components/require-auth';
import PaymentSuccess from './pages/SuccessfulPayment';

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/dashboard",
          element: <RequireAuth><Dashboard /></RequireAuth>,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/payment-success",
          element: <PaymentSuccess />,
        },
        {
          path: "/link/:id",
          element: <RequireAuth><Link /></RequireAuth>,
        },
        {
          path: "/:id",
          element: <RedirectLink />,
        }
      ]
    }
  ])

  return (
    <>
      <UrlProvider>
        <RouterProvider router={router} />
      </UrlProvider>
    </>
  )
}

export default App
