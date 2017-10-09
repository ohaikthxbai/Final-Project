import App from './App.js';
import Main from './components/Main/Main.js';
import LoginState from './components/Login/LoginState.js';
import SignUpState from './components/Signup/SignUpState.js';


const routes = {
  component: App,
  childRoutes: [

    {
      path: '/',
      component: Main
    },

    {
      path: '/login',
      component: LoginState
    },

    {
      path: '/signup',
      component: SignUpState
    }

  ]
};

export default routes;