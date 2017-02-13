/// <reference path="./interfaces.d.ts"/>

import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";

export class Login {

    constructor(private formSelector: string, private flowUrl: string) {
        this.flowUrl = this.flowUrl + (this.flowUrl.endsWith('/') ? '' : '/') + "map";
    }

    public render() {

        let element = $(this.formSelector).get(0);
        $.get(this.flowUrl, (res) => {
            ReactDOM.render(
                <App data={res} />, element
            );
        });
    }

}