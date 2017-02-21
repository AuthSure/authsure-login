/// <reference path="./interfaces.d.ts"/>

import * as React from "react";

export default class ProviderLogin extends React.Component<IProviderLoginProps, IProviderLoginState> {
    
    constructor(props: IProviderLoginProps) {
        super(props);
    }

    private getFontAwesomeClass(): string {
        let name = this.props.provider.name.replace(" ", "-").toLowerCase();
        let type = this.props.provider.type.toLowerCase();
        if (name === 'salesforce') {
            name = "cloud";
        } else if (name === 'azure-ad') {
            name = "windows";
        } else if (type === 'rest') {
            name = "user"
        }
        return 'fa-' + name;
    }

    private getButtonClass(): string {
        let type = this.props.provider.type.toLowerCase();
        if (type === 'rest') {
            return 'as-btn-rest'
        }
        let name = this.props.provider.name.replace(" ", "-").toLowerCase();
        return 'as-btn-' + name;
    }
    
    public render() {
        let provider = this.props.provider;
        let btnCls = "btn btn-block as-btn-provider " + this.getButtonClass();
        let faCls = "fa " + this.getFontAwesomeClass();
        let text = (this.props.signIn ? "Sign in with " : "Sign up with ") + provider.name;
        return (
            <button type="button" className={btnCls} role="button" onClick={(event) => this.handleClick(event)}>
                <span className="pull-left">
                    <i className={faCls} aria-hidden="true" />
                    {text}
                </span>
            </button>
        );
    }

    public handleClick(event: any) {
        window.location.assign(this.props.provider.loginUrl);
    }
}