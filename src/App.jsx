import './App.css';

// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { RouterProvider } from 'react-router-dom';

import router from './routes';
import store from './store/store';

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
