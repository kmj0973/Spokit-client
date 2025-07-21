import { createBrowserRouter, RouterProvider } from 'react-router';
import ProtectedRoute from '@/feature/auth/ui/ProtectedRoute';

import { LoginPage } from '@/pages/login/ui/LoginPage';
import Calendar from '@/widgets/calendar/ui/Calendar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Calendar />,
  },
  {
    path: '/calendar',
    element: (
      <ProtectedRoute>
        <Calendar />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
