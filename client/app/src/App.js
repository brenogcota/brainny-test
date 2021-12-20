import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { AuthProvider, useAuth } from "./store/context/auth";
import { LocaleProvider } from "./store/context/locale";

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import NotFound from './pages/NotFound';
import Settings from "./pages/Settings";
import ResetPassword from "./pages/Auth/ResetPassword";

import './App.css';

export const PrivateRoute = ({component, ...options }) => {
  const { auth } = useAuth();
  const finalComponent = auth.isAuthenticated ? component : SignIn;
      
  return (   
     <Route {...options} component={finalComponent} />
  )
};

function App() {
  return (
    <LocaleProvider>
      <AuthProvider>
          <Router>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/dash" component={Dashboard} />
                <PrivateRoute path="/settings" component={Settings} />
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route path="*" component={NotFound} />
              </Switch>
          </Router>
      </AuthProvider>
    </LocaleProvider>
  );
}

export default App;
