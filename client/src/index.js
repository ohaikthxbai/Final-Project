import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';

// ReactDOM.render(<App />, document.getElementById('root'));
 registerServiceWorker();

const routes = makeMainRoutes();

ReactDOM.render(
    routes,
  document.getElementById('root')
);
