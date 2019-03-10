import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/view/App/App';
import ScrollToTop from './frontend/view/App/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './tattooStyle.css';
import './modalStyle.css';

ReactDOM.render((
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  ), document.getElementById('root'));
registerServiceWorker();
