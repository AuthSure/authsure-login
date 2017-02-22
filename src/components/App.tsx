/// <reference path="../interfaces.d.ts"/>
import * as React from "react";
import { Router, browserHistory } from 'react-router';
import { Route, IndexRoute } from 'react-router';
import ForgotPasswordPage from "./forgot-password/ForgotPasswordPage";
import LoginPage from "./login/LoginPage";
import SignupPage from "./signup/SignupPage";
import AppContainer from "./container/AppContainer";


export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
    }

    render() {
        return (
                <Router history={browserHistory} >
                    <Route path="/" component={(props)=>(<AppContainer children={props.children} data={this.props.data}/>)}>
                        <IndexRoute component={(props) => (<LoginPage data={this.props.data}/>)} />
                        <Route path="signup" component={(props) => (<SignupPage data={this.props.data}/>)} />
                        <Route path="forgot_password" component={(props)=>(<ForgotPasswordPage data={this.props.data}/>)}/>
                    </Route>
                </Router>
        );
    }
}


