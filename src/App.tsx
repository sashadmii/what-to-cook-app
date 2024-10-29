import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './routes/index';
import store from './store/store';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
