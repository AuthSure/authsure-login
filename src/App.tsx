/// <reference path="./interfaces.d.ts"/>

import * as React from "react";
import LoginTab from "./LoginTab";
import SignUpTab from "./SignUpTab";
import ForgotPasswordTab from "./ForgotPasswordTab";
// import { Section } from "./components/Section";
// import {Notification} from "./components/Notification";
// import {ComponentValue} from "./components/ComponentValue";

export class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-4 col-md-4">
                        <div className="row">
                            <div className="col-xs-12 as-logo">
                                <img src={this.props.data.logo} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="tab-content">
                                    <LoginTab data={this.props.data} />
                                    <SignUpTab data={this.props.data} />
                                    <ForgotPasswordTab/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}