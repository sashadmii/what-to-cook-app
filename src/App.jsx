import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipePage } from './pages/RecipePage';
import { List } from './components/list';

import './App.css';

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

export function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
