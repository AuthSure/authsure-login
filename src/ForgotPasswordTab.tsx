/// <reference path="./interfaces.d.ts"/>

import * as React from "react";

export default class ForgotPasswordTab extends React.Component<IForgotPasswordTabProps, IForgotPasswordTabState> {

    constructor(props: IForgotPasswordTabProps) {
        super(props);
    }

    public render() {
        return (
            <div id="as-tab-forgot-password" className="tab-pane fade">
                <div className="row">
                    <div className="col-xs-12">
                        <form role="form" method="post" className="as-forgot-password-form">
                            <div className="form-group">
                                <div className="input-group margin-bottom-sm">
                                    <span className="input-group-addon"><i className="fa fa-user fa-fw"/></span>
                                    <input type="text" className="form-control"
                                           placeholder="Username or Email Address"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-block as-btn-submit">Reset Password</button>
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
                </div>
            </div>
        );
    }
}