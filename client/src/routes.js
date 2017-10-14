import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import LoginState from './components/Login/LoginState.js';
import SignUpState from './components/Signup/SignUpState.js';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}

// const routes = {
//   component: App,
//   childRoutes: [

//     {
//       path: '/',
//       component: Main
//     },
//     {
//       path: '/about',
//       component: About
//     },

//     {
//       path: '/login',
//       component: LoginState
//     },

//     {
//       path: '/signup',
//       component: SignUpState
//     }

//   ]
// };

// export default routes;