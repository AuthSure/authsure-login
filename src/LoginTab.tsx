/// <reference path="./interfaces.d.ts"/>

import * as React from "react";
import ProviderLogins from "./ProviderLogins";
import LocalLogin from "./LocalLogin";

export default class LoginTab extends React.Component<ILoginTabProps, ILoginTabState> {

    constructor(props: ILoginTabProps) {
        super(props);
    }

    private hasLocalLogin() {
        let providers = this.props.data.providers;
        let hasLocal = false;
        for (let i = 0; i < providers.length; i++) {
            let provider = providers[i];
            if (provider.name === 'Local') {
                hasLocal = true;
            }
        }
        return hasLocal;
    }

    public render() {
        return (
            <div id="as-tab-sign-in" className="tab-pane fade in active">
                <div className="row">
                    {this.hasLocalLogin() ? <LocalLogin data={this.props.data} /> : ''}
                    <ProviderLogins providers={this.props.data.providers} signIn={true} />
                </div>
            </div>
        );
    }

}