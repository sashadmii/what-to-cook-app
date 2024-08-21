// eslint-disable-next-line no-unused-vars
import { RouterProvider } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
import store from './store/store';
import router from './routes';

import './App.css';

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
