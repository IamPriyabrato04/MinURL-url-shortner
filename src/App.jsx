import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
import Link from './pages/link';
import RedirectLink from './pages/redirect-link';
import ErrorBoundary from './pages/error-boundary';
import './index.css'
import UrlProvider from './context';
import RequireAuth from './components/require-auth';
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
          element: <RequireAuth><Dashboard /></RequireAuth>,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/auth",
          element: <Auth />,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/link/:id",
          element: <RequireAuth><Link /></RequireAuth>,
          errorElement: <ErrorBoundary />
        },
        {
          path: "/:id",
          element: <RequireAuth><RedirectLink /></RequireAuth>,
          errorElement: <ErrorBoundary />
        }
      ]
    }
  ])

  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>)
}

export default App
