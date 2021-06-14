import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import Register from "./components/register";
import registerServiceWorker from 'react-service-worker';
import { BrowserRouter } from 'react-router-dom';

const AppWithRouter = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))
registerServiceWorker()