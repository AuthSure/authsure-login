/// <reference path="./interfaces.d.ts"/>

import * as React from "react";
import InputField from "./InputField";
import has = Reflect.has;
import { Link } from 'react-router';
import FormError from "./FormError";

export default class LocalLogin extends React.Component<ILocalLoginProps, ILocalLoginState> {

    public state: ILocalLoginState;

    constructor(props: ILocalLoginProps) {
        super(props);
        this.state = {
            hasError: false,
            helpMsg: '',
            username: '',
            usernameState: {
                hasError: false,
                helpMsg: ''
            },
            password: '',
            passwordState: {
                hasError: false,
                helpMsg: ''
            }
        };
    }

    public render() {
        return (
            <div className="col-xs-12">
                {this.state.hasError && this.state.helpMsg !== '' ? <FormError msg={this.state.helpMsg} /> : ''}
                <form role="form" method="post" className="as-sign-in-form" onSubmit={(event) => this.handleSubmit(event)}>
                    <InputField type="text" faIcon="user" placeholder="Username or Email Address"
                                state={this.state.usernameState}
                                onChange={(event: any) => this.handleUsernameChange(event)} />
                    <InputField type="password" faIcon="lock" placeholder="Password"
                                state={this.state.passwordState}
                                onChange={(event: any) => this.handlePasswordChange(event)} />
                    <div className="form-group">
                        <button type="submit" className="btn btn-block as-btn-submit">Sign In</button>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-xs-12">
                                <a href=""><Link to="/signup">Sign Up</Link></a>
                                <i className="fa fa-circle as-separator"/>
                                <a href=""><Link to="/forgot_password">Forgot Password?</Link></a>
                                <label className="pull-right">
                                    <input type="checkbox" className="as-input-remember"/>
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    public handleUsernameChange(event: any) {
        this.state.username = event.target.value;
        this.setState(this.state);
    }

    public handlePasswordChange(event: any) {
        this.state.password = event.target.value;
        this.setState(this.state);
    }

    public showFormError(msg: string) {
        this.state.hasError = true;
        this.state.helpMsg = msg;
        this.setState(this.state);
    }

    public validateForm() {
        this.state.hasError = false;

        let username = this.state.username;
        if (username == null || username.trim() === '') {
            this.state.usernameState.hasError = true;
            this.state.usernameState.helpMsg = 'Please enter a username or email address';
            this.state.hasError = true;
        }

        let password = this.state.password;
        if (password == null || password.trim() === '') {
            this.state.passwordState.hasError = true;
            this.state.passwordState.helpMsg = 'Please enter a password';
            this.state.hasError = true;
        }

        if (this.state.hasError) {
            this.setState(this.state);
        }

        return !this.state.hasError;
    }

    public handleSubmit(event: any) {
        event.preventDefault();
        // Reset form
        this.state.hasError = false;
        this.state.helpMsg = '';
        this.state.usernameState.hasError = false;
        this.state.usernameState.helpMsg = '';
        this.state.passwordState.hasError = false;
        this.state.passwordState.helpMsg = '';

        if (this.validateForm()) {
            let formData = {
                username: this.state.username,
                password: this.state.password
                // TODO Need to implement remember me
            };
            let self = this;
            $.ajax({
                url: this.props.data.loginUrl + (this.props.data.loginUrl.endsWith('/') ? '' : '/') + "auth",
                method: 'POST',
                contentType: "application/json",
                data: JSON.stringify(formData)
            }).done(function(res) {
                window.location.assign(res.redirect);
            }).fail((function(res) {
                if (res.status == 401) {
                    self.showFormError("Incorrect username or password.");
                } else {
                    self.showFormError("Our apologies. An error has occurred.")
                }
            }));
        }
    }

}