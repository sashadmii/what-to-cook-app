import { createBrowserRouter } from 'react-router-dom';

import List from '../components/list';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RecipePage } from '../pages/RecipePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <List />,
      },
    ],
  },
  {
    path: 'recipe/:id',
    element: <RecipePage />,
  },
]);

export default router;
