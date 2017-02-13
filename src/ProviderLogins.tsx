/// <reference path="./interfaces.d.ts"/>

import * as React from "react";
import ProviderLogin from "./ProviderLogin";

export default class ProviderLogins extends React.Component<IProviderLoginsProps, IProviderLoginsState> {

    constructor(props: IProviderLoginsProps) {
        super(props);
    }

    public render() {
        return (
            <div className="col-xs-12">
                {this.props.providers
                    .filter((provider:any) => provider.name !== 'Local')
                    .map((provider:any) => <ProviderLogin provider={provider} signIn={this.props.signIn} />)
                }
            </div>
        );
    }
}