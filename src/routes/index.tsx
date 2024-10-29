import { createBrowserRouter } from 'react-router-dom';

import List from '../components/list/List.tsx';
import { HomePage } from '../pages/HomePage.tsx';
import { NotFoundPage } from '../pages/NotFoundPage.tsx';
import { RecipePage } from '../pages/RecipePage.tsx';

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
