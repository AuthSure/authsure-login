/// <reference path="./interfaces.d.ts"/>

import * as React from "react";
import ProviderLogins from "./ProviderLogins";
import InputField from "./InputField";

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
                        <form role="form" method="post" className="as-sign-up-form" onSubmit={(event) => this.handleSubmit(event)}>
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
                                        onChange={(event: any) => this.handlePasswordChange(event)} />
                            <div className="form-group">
                                <button type="button" className="btn btn-block as-btn-submit">Sign Up</button>
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
                        <ProviderLogins providers={this.props.data.providers} signIn={false} />
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
        this.state.givenName = event.target.value;
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

    }

    public handleSubmit(event: any) {
        event.preventDefault();
    }
}