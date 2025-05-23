import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import store from './/store.jsx'
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store={store}>
    <BrowserRouter >

    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
