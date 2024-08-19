import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../pages/HomePage.jsx';
import { NotFoundPage } from '../pages/NotFoundPage.jsx';
import { RecipePage } from '../pages/RecipePage.jsx';
import List from '../components/list';

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
