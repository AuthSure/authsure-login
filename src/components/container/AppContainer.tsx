/// <reference path="../../interfaces.d.ts"/>
import * as React from "react";
import {Link} from 'react-router';


export default class AppContainer extends React.Component<IAppContainerProps, any> {

    constructor(props: IAppContainerProps) {
        super(props);
    }

    render() {
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
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}