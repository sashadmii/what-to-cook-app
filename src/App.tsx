import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from './routes/index.ts';
import store from './store/store.tsx';

export function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
