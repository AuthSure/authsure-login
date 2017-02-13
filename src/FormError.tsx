/// <reference path="./interfaces.d.ts"/>

import * as React from "react";

export default class FormError extends React.Component<IFormErrorProps, IFormErrorState> {

    constructor(props: IFormErrorProps) {
        super(props);
    }

    public render() {
        return (
            <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"/>
                <span className="as-error">{this.props.msg}</span>
            </div>
        )
    }

}