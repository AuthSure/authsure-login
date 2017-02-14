/// <reference path="./interfaces.d.ts"/>

import * as React from "react";
import ProviderLogins from "./ProviderLogins";
import InputField from "./InputField";
import has = Reflect.has;
import FormError from "./FormError";

export default class SignUpTab extends React.Component<ISignUpTabProps, ISignUpTabState> {

    public state: ISignUpTabState;

    constructor(props: ISignUpTabProps) {
        super(props);
        this.state = {
            hasError: false,
            helpMsg: '',
            givenName: '',
            givenNameState: {
                hasError: false,
                helpMsg: ''
            },
            familyName: '',
            familyNameState: {
                hasError: false,
                helpMsg: ''
            },
            emailAddress: '',
            emailAddressState: {
                hasError: false,
                helpMsg: ''
            },
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
        }
    }

    public render() {
        return (
            <div id="as-tab-sign-up" className="tab-pane fade">
                <div className="row">
                    <div className="col-xs-12">
                        {this.state.hasError && this.state.helpMsg !== '' ? <FormError msg={this.state.helpMsg}/> : ''}
                        <form role="form" method="post" className="as-sign-up-form"
                              onSubmit={(event) => this.handleSubmit(event)}>
                            <InputField type="text" faIcon="user" placeholder="First name"
                                        state={this.state.givenNameState}
                                        onChange={(event: any) => this.handleGivenNameChange(event)}/>
                            <InputField type="text" faIcon="user" placeholder="Last name"
                                        state={this.state.familyNameState}
                                        onChange={(event: any) => this.handleFamilyNameChange(event)}/>
                            <InputField type="text" faIcon="envelope" placeholder="Email address"
                                        state={this.state.emailAddressState}
                                        onChange={(event: any) => this.handleEmailAddressChange(event)}/>
                            <InputField type="text" faIcon="user" placeholder="Username"
                                        state={this.state.usernameState}
                                        onChange={(event: any) => this.handleUsernameChange(event)}/>
                            <InputField type="password" faIcon="password" placeholder="Password"
                                        state={this.state.passwordState}
                                        onChange={(event: any) => this.handlePasswordChange(event)}/>
                            <div className="form-group">
                                <button type="submit" className="btn btn-block as-btn-submit">Sign Up</button>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-12">
                                        Already have an account?
                                        <a data-toggle="tab" href="#as-tab-sign-in">Sign In</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <ProviderLogins providers={this.props.data.providers} signIn={false}/>
                    </div> {/* end column */}
                </div> {/* end row */}
            </div>
        );
    }

    public handleGivenNameChange(event: any) {
        this.state.givenName = event.target.value;
        this.setState(this.state);
    }

    public handleFamilyNameChange(event: any) {
        this.state.familyName = event.target.value;
        this.setState(this.state);
    }

    public handleEmailAddressChange(event: any) {
        this.state.emailAddress = event.target.value;
        this.setState(this.state);
    }

    public handleUsernameChange(event: any) {
        this.state.username = event.target.value;
        this.setState(this.state);
    }

    public handlePasswordChange(event: any) {
        this.state.password = event.target.value;
        this.setState(this.state);
    }

    public validateForm() {
        this.state.hasError = false;

        let givenName = this.state.givenName;
        if (givenName == null || givenName.trim() == '') {
            this.state.givenNameState.hasError = true;
            this.state.givenNameState.helpMsg = 'Please enter first name';
            this.state.hasError = true;
        } else if (givenName.length < 2) {
            this.state.givenNameState.hasError = true;
            this.state.givenNameState.helpMsg = 'Must be a minimum of 2 characters';
            this.state.hasError = true;
        }

        let familyName = this.state.familyName;
        if (familyName == null || familyName.trim() === '') {
            this.state.familyNameState.hasError = true;
            this.state.familyNameState.helpMsg = 'Please enter last name';
            this.state.hasError = true;
        } else if (familyName.length < 2) {
            this.state.familyNameState.hasError = true;
            this.state.familyNameState.helpMsg = 'Must be minimum of 2 characters';
            this.state.hasError = true;
        }

        let emailAddress = this.state.emailAddress;
        if (emailAddress == null || emailAddress.trim() === '') {
            this.state.emailAddressState.hasError = true;
            this.state.emailAddressState.helpMsg = 'Please enter email address';
            this.state.hasError = true;
        } else if (!this.validateEmail(emailAddress)) {
            this.state.emailAddressState.hasError = true;
            this.state.emailAddressState.helpMsg = 'Please enter valid email address';
            this.state.hasError = true;
        }

        let username = this.state.username;
        if (username == null || username.trim() === '') {
            this.state.usernameState.hasError = true;
            this.state.usernameState.helpMsg = 'Please enter a username or email address';
            this.state.hasError = true;
        } else if (username.length < 2) {
            this.state.usernameState.hasError = true;
            this.state.usernameState.helpMsg = 'Must be a minimum of 2 characters';
            this.state.hasError = true;
        }

        let password = this.state.password;
        if (password == null || password.trim() === '') {
            this.state.passwordState.hasError = true;
            this.state.passwordState.helpMsg = 'Please enter a password';
            this.state.hasError = true;
        } else if (password.length < 6) {
            this.state.passwordState.hasError = true;
            this.state.passwordState.helpMsg = 'Must be a minimum of 6 characters';
            this.state.hasError = true;

        }

        if (this.state.hasError) {
            this.setState(this.state);
        }
        return !this.state.hasError;
    }

    public showFormError(msg: string) {
        this.state.hasError = true;
        this.state.helpMsg = msg;
        this.setState(this.state);
    }

    public validateEmail = (email: string) => {
        var regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return regEx.test(email);
    };

    public handleSubmit(event: any) {
        event.preventDefault();
        this.state.hasError = false;
        this.state.helpMsg = '';
        this.state.givenNameState.hasError = false;
        this.state.givenNameState.helpMsg = '';
        this.state.familyNameState.hasError = false;
        this.state.familyNameState.helpMsg = '';
        this.state.emailAddressState.hasError = false;
        this.state.emailAddressState.helpMsg = '';
        this.state.usernameState.hasError = false;
        this.state.usernameState.helpMsg = '';
        this.state.passwordState.hasError = false;
        this.state.passwordState.helpMsg = '';

        if (this.validateForm()) {
            let formData = {
                givenName: this.state.givenName,
                familyName: this.state.familyName,
                email: this.state.emailAddress,
                username: this.state.username,
                password: this.state.password,
                locale: 'en' // TODO Implement me!
            };
            let self = this;
            $.ajax({
                url: this.props.data.loginUrl + (this.props.data.loginUrl.endsWith('/') ? '' : '/') + "signup",
                method: 'POST',
                contentType: "application/json",
                data: JSON.stringify(formData)
            }).done(function(res) {
                window.location.assign(res.redirect);
            }).fail((function(res) {
                if (res.status == 400) {
                    $.each(res.responseJSON, function (index, value) {
                        if (value.field == null) {
                            self.showFormError(value.message)
                        } else {
                            if(value.field.toLowerCase() === 'givenname') {
                                self.state.givenNameState.hasError = true;
                                self.state.givenNameState.helpMsg = value.message;
                            }
                            if(value.field.toLowerCase() === 'familyname') {
                                self.state.familyNameState.hasError = true;
                                self.state.familyNameState.helpMsg = value.message;
                            }
                            if(value.field.toLowerCase() === 'email') {
                                self.state.emailAddressState.hasError = true;
                                self.state.emailAddressState.helpMsg = value.message;
                            }
                            if(value.field.toLowerCase() === 'username') {
                                self.state.usernameState.hasError = true;
                                self.state.usernameState.helpMsg = value.message;
                            }
                            if(value.field.toLowerCase() === 'password') {
                                self.state.passwordState.hasError = true;
                                self.state.passwordState.helpMsg = value.message;
                            }
                            self.state.hasError = true;
                            self.setState(self.state);
                        }
                    });
                } else {
                    self.showFormError("Our apologies. An error has occurred.")
                }
            }));
        }
    }
}