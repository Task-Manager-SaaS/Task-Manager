import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Redux ka Provider import karo
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import store from './redux/store.js';  // Ensure you have the store correctly imported

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
