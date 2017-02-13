/// <reference path="./interfaces.d.ts"/>

import * as React from "react";

export default class InputField extends React.Component<IInputFieldProps, IInputFieldState> {

    public state: IInputFieldState;

    constructor(props: IInputFieldProps) {
        super(props);
        this.state = props.state;
    }

    private get faCls() {
        return "fa fa-fw fa-" + this.props.faIcon;
    }

    private get formGroupCls() {
        return "form-group" + (this.state.hasError ? " has-error": "");
    }

    public render() {
        return (
            <div className={this.formGroupCls}>
                <div className="input-group margin-bottom-sm">
                    <span className="input-group-addon"><i className={this.faCls}/></span>
                    <input type={this.props.type} className="form-control"
                           placeholder={this.props.placeholder} onChange={(event) => this.props.onChange(event)}/>
                </div>
                <span className="help-block">{this.state.helpMsg}</span>
            </div>
        );
    }

}