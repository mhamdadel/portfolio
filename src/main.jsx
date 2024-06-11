import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.js';
import StarfieldBackgroundComponent from './components/StarfieldBackgroundComponent/StarfieldBackgroundComponent';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <StarfieldBackgroundComponent />
        <NavbarComponent />
      </RouterProvider>
    </Provider>
  // </React.StrictMode>
);
