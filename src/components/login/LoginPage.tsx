import * as React from "react";
import LocalLogin from "../../LocalLogin";
import ProviderLogins from "../../ProviderLogins";
import CustomLoginPage from "../custom-login/CustomLoginPage";


export default class LoginPage extends React.Component<ILoginPageProps, ILoginTabState> {

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

    private hasOnlyCustomLogin() {
        let providers = this.props.data.providers;
        return providers.length == 1
            && providers[0].type.toLowerCase() === 'simple_api';
    }

    render() {
        if (this.hasOnlyCustomLogin()) {
            return (
                <CustomLoginPage data={this.props.data}/>
            )
        } else {
            return (
                <div>
                    <div className="row">
                        {this.hasLocalLogin() ? <LocalLogin data={this.props.data}/> : ''}
                        <ProviderLogins providers={this.props.data.providers} signIn={true}/>
                    </div>
                </div>
            )
        }
    }
}

