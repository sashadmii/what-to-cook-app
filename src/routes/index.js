import { createBrowserRouter } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import List from '../components/list';
// eslint-disable-next-line no-unused-vars
import { HomePage } from '../pages/HomePage.jsx';
// eslint-disable-next-line no-unused-vars
import { NotFoundPage } from '../pages/NotFoundPage.jsx';
// eslint-disable-next-line no-unused-vars
import { RecipePage } from '../pages/RecipePage.jsx';

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
