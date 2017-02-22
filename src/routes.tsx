import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import LoginPage from './components/login/LoginPage';
import SignupPage from "./components/signup/SignupPage";
import ForgotPasswordPage from "./components/forgot-password/ForgotPasswordPage";

export default (
        <Route path="/" component={App}>
            <IndexRoute component={LoginPage} />
            <Route path="signup" component={SignupPage} />
            <Route path="forgot_password" component={ForgotPasswordPage}/>
        </Route>
);