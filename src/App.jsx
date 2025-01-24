import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
import Link from './pages/link';
import RedirectLink from './pages/redirect-link';
import ErrorBoundary from './pages/error-boundary';
import './index.css'
function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/auth",
          element: <Auth />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/link/:id",
          element: <Link />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/:id",
          element: <RedirectLink />,
          errorElement: <ErrorBoundary />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
