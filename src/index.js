import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/view/App/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './tattooStyle.css';
import './modalStyle.css';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
