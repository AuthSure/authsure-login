interface IAppProps {
    data: any
}
interface IAppState {
}
interface IAppContainerProps {
    data: any,
    children: any
}
interface ILoginPageProps{
    data:any
}
interface ISignupPageProps {
    data:any
}
interface IForgotPasswordPageProps {
    data:any
}
interface ILoginTabProps {
    data: any
}
interface ILoginTabState {
}
interface ISignUpTabProps {
    data: any
}
interface ISignUpTabState {
    hasError: boolean
    helpMsg: string
    givenName: string
    givenNameState: IInputFieldState
    familyName: string
    familyNameState: IInputFieldState
    emailAddress: string
    emailAddressState: IInputFieldState
    username: string
    usernameState: IInputFieldState
    password: string
    passwordState: IInputFieldState
}
interface IForgotPasswordTabProps {
    data: any
}
interface IForgotPasswordTabState {
    hasError: boolean
    helpMsg: string
    username: string
    usernameState: IInputFieldState
    code: string
    codeState: IInputFieldState
    password: string
    passwordState: IInputFieldState
    confirmPassword: string
    confirmPasswordState: IInputFieldState
    formState: IForgotPasswordState
}
interface IForgotPasswordState {
    forgotPassword: string
    verifyCode: string
    resetSuccess: string
}
interface IProviderLoginsProps {
    providers: any
    signIn: boolean
}
interface IProviderLoginsState {
}
interface IProviderLoginProps {
    provider: any
    signIn: boolean
}
interface IProviderLoginState {
}
interface ILocalLoginProps {
    data: any
}
interface ILocalLoginState {
    hasError: boolean
    helpMsg: string
    username: string
    usernameState: IInputFieldState
    password: string
    passwordState: IInputFieldState
}
interface IInputFieldProps {
    type: string
    faIcon: string
    placeholder: string
    state: IInputFieldState
    onChange: any // TODO should be typed
    // onChange: FormEventHandler<T>
}
interface IInputFieldState {
    hasError: boolean
    helpMsg: string
}
interface IFormErrorProps {
    msg: string
}
interface IFormErrorState {
}
interface ICustomLoginProps {
    data: any
}
interface ICustomLoginState {
    hasError: boolean
    helpMsg: string
    username: string
    usernameState: IInputFieldState
    password: string
    passwordState: IInputFieldState
}