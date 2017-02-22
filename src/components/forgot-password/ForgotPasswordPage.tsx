import * as React from 'react';
import { Link, IndexLink } from 'react-router';
import InputField from "../../InputField";
import FormError from "../../FormError";

export default class ForgotPasswordPage extends React.Component<IForgotPasswordPageProps, any> {
    public state: IForgotPasswordTabState;

    constructor(props: IForgotPasswordTabProps) {
        super(props);
        this.state = {
            hasError: false,
            helpMsg: '',
            username: '',
            usernameState: {
                hasError: false,
                helpMsg: ''
            },
            code: '',
            codeState: {
                hasError: false,
                helpMsg: ''
            },
            password: '',
            passwordState: {
                hasError: false,
                helpMsg: ''
            },
            confirmPassword: '',
            confirmPasswordState: {
                hasError: false,
                helpMsg: ''
            },
            formState: {
                forgotPassword: '',
                verifyCode: 'hidden',
                resetSuccess: 'hidden'
            }
        };
    }

    public render() {
        return (
                <div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className={this.state.formState.forgotPassword}>
                                {this.state.hasError && this.state.helpMsg !== '' ?
                                        <FormError msg={this.state.helpMsg}/> : ''}
                                <form role="form" method="post" className="as-forgot-password-form"
                                      onSubmit={(event) => this.handleForgotPasswordSubmit(event)}>
                                    <InputField faIcon="user" type="text" placeholder="Username or Email Address"
                                                state={this.state.usernameState}
                                                onChange={(event:any) => this.handleUsernameChange(event)}/>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-block as-btn-submit">Reset Password
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <a href=""><IndexLink to="/">Sign In</IndexLink></a>
                                                <i className="fa fa-circle as-separator"/>
                                                <a href=""><Link to="/signup">Sign Up</Link></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={this.state.formState.verifyCode}>
                                <form role="form" method="post" className="as-reset-password-form"
                                      onSubmit={(event) => this.handleResetCodeSubmit(event)}>
                                    <div className="alert alert-info" role="alert">
                                        <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
                                        <span className="as-info">A verification code has been sent to your email. Please enter it below.</span>
                                    </div>
                                    <InputField faIcon="key" type="text" placeholder="Password reset code"
                                                state={this.state.codeState}
                                                onChange={(event:any) => this.handleResetCodeChange(event)}/>
                                    <InputField faIcon="lock" type="password" placeholder="New Password"
                                                state={this.state.passwordState}
                                                onChange={(event:any) => this.handlePasswordChange(event)}/>
                                    <InputField faIcon="lock" type="password" placeholder="Re-enter Password"
                                                state={this.state.confirmPasswordState}
                                                onChange={(event: any) => this.handleConfirmPasswordChange(event)}/>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-block as-btn-submit">
                                            Reset Password
                                        </button>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <a data-toggle="tab" href="#as-tab-sign-in">Sign In</a>
                                                <i className="fa fa-circle as-separator"/>
                                                <a data-toggle="tab" href="#as-tab-sign-up">Sign Up</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className={this.state.formState.resetSuccess}>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="alert alert-success" role="alert">
                                                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true">
                                                </span>
                                            <span className="as-success">Password updated successfully. Please
                                                    <a data-toggle="tab"
                                                       onClick={(event: any) => this.handleLoginRedirect(event)}
                                                       href="#as-tab-sign-in"> click here</a> to login.
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

    private handleUsernameChange(event: any) {
        this.state.username = event.target.value;
        this.setState(this.state);
    }

    private handleResetCodeChange(event: any) {
        this.state.code = event.target.value;
        this.setState(this.state);
    }

    private handlePasswordChange(event: any) {
        this.state.password = event.target.value;
        this.setState(this.state);
    }

    private handleConfirmPasswordChange(event: any) {
        this.state.confirmPassword = event.target.value;
        this.setState(this.state);
    }

    public showFormError(msg: string) {
        this.state.hasError = true;
        this.state.helpMsg = msg;
        this.setState(this.state);
    }

    public handleForgotPasswordSubmit(event: any) {
        event.preventDefault();

        this.state.hasError = false;
        this.state.helpMsg = '';
        this.state.usernameState.hasError = false;
        this.state.usernameState.helpMsg = '';

        if(this.validateForgotPasswordForm()) {

            let formData = {
                username: this.state.username
            };

            var self = this;

            $.ajax({
                url: this.props.data.loginUrl + (this.props.data.loginUrl.endsWith('/') ? '' : '/') + "forgot_password",
                method: 'POST',
                contentType: "application/json",
                data: JSON.stringify(formData)
            }).done(function (res) {
                self.state.formState.forgotPassword = 'hidden';
                self.state.formState.verifyCode = '';
                self.state.formState.resetSuccess = 'hidden';
                self.setState(self.state);
            }).fail(function (res) {
                if (res.status == 400) {
                    self.state.usernameState.hasError = true;
                    self.state.usernameState.helpMsg = "Username or email does not exists";
                    self.state.hasError = true;
                    self.setState(self.state);

                } else {
                    self.showFormError('Our apologies. An error has occurred.');
                }
            });
        }
    }

    private handleResetCodeSubmit(event: any) {
        event.preventDefault();

        this.state.hasError = false;
        this.state.helpMsg = '';
        this.state.codeState.hasError = false;
        this.state.codeState.helpMsg = '';
        this.state.passwordState.hasError = false;
        this.state.passwordState.helpMsg = '';
        this.state.confirmPasswordState.hasError = false;
        this.state.confirmPasswordState.helpMsg = '';

        if(this.validateResetCodeForm()) {
            var formData = {
                code: this.state.code,
                password: this.state.password
            };

            var self = this;

            $.ajax({
                url: this.props.data.loginUrl + (this.props.data.loginUrl.endsWith('/') ? '' : '/') + "reset_password",
                method: 'POST',
                contentType: "application/json",
                data: JSON.stringify(formData)
            }).done(function (res) {
                self.state.formState.forgotPassword = 'hidden';
                self.state.formState.verifyCode = 'hidden';
                self.state.formState.resetSuccess = '';
                self.setState(self.state);
            }).fail(function (res) {
                if (res.status == 400) {
                    self.state.codeState.hasError = true;
                    self.state.codeState.helpMsg = "Reset password code is invalid";
                    self.state.hasError = true;
                    self.setState(self.state);
                } else {
                    self.showFormError('Our apologies. An error has occurred.');
                }
            });
        }
    }

    private validateForgotPasswordForm() {
        this.state.hasError = false;

        let username = this.state.username;
        if (username == null || username.trim() == '') {
            this.state.usernameState.hasError = true;
            this.state.usernameState.helpMsg = 'Please enter username or email address.';
            this.state.hasError = true;
        } else if (username.length < 2) {
            this.state.usernameState.hasError = true;
            this.state.usernameState.helpMsg = 'Please enter valid username or email address.';
            this.state.hasError = true;
        }

        if (this.state.hasError) {
            this.setState(this.state);
        }

        return !this.state.hasError;
    }

    private validateResetCodeForm() {

        this.state.hasError = false;

        let code = this.state.code;
        if (code == null || code.trim() == '') {
            this.state.codeState.hasError = true;
            this.state.codeState.helpMsg = 'Password reset code is required.';
            this.state.hasError = true;
        } else if (code.length < 6) {
            this.state.codeState.hasError = true;
            this.state.codeState.helpMsg = 'Incorrect password reset code.';
            this.state.hasError = true;
        }

        let password = this.state.password;
        let confirmPassword = this.state.confirmPassword;


        if (password == null || password.trim() == '') {
            this.state.passwordState.hasError = true;
            this.state.passwordState.helpMsg = 'Password is required.';
            this.state.hasError = true;
        } else if (password.length < 6) {
            this.state.passwordState.hasError = true;
            this.state.passwordState.helpMsg = 'Must be a minimum of 6 characters.';
            this.state.hasError = true;
        } else if(password != confirmPassword) {
            this.state.confirmPasswordState.hasError = true;
            this.state.confirmPasswordState.helpMsg = 'Password do not match.';
            this.state.hasError = true;
        }

        if (this.state.hasError) {
            this.setState(this.state);
        }

        return !this.state.hasError;
    }

    private handleLoginRedirect(event: any) {
        event.preventDefault();
        this.state.hasError = false;
        this.state.helpMsg = '';
        this.state.username = '';
        this.state.password = '';
        this.state.confirmPassword = '';
        this.state.code = '';
        this.state.usernameState.hasError = false;
        this.state.usernameState.helpMsg = '';
        this.state.codeState.hasError = false;
        this.state.codeState.helpMsg = '';
        this.state.passwordState.hasError = false;
        this.state.passwordState.helpMsg = '';
        this.state.confirmPasswordState.hasError = false;
        this.state.confirmPasswordState.helpMsg = '';
        this.state.formState.forgotPassword = '';
        this.state.formState.verifyCode = 'hidden';
        this.state.formState.resetSuccess = 'hidden';

        window.location.reload()
    }
}