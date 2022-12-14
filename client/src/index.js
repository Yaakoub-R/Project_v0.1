import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/Store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ChakraProvider>
    <BrowserRouter>
    <Provider store = {store}>
     <App />
     </Provider>
    </BrowserRouter>
   </ChakraProvider>
  </React.StrictMode>
);


