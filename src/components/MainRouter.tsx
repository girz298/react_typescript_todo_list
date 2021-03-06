import * as React from 'react';

import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import Root from "./Root";
import {GuestRoutes} from "../constants/urls";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import LoginPage from "./LoginPage/LoginPage";


class MainRouter extends React.Component<RouteComponentProps> {
    public render() {
        return (
            <Switch>
                <Route exact={true} path={GuestRoutes.HOME_PAGE} component={Root}/>
                <Route exact={true} path={GuestRoutes.LOGIN_PAGE} component={LoginPage}/>
                <Route exact={true} path={GuestRoutes.REGISTRATION_PAGE} component={RegistrationPage}/>
                <Route exact={true} path='/projects' component={Root}/>
            </Switch>
        );
    }
}

export default withRouter(MainRouter);
