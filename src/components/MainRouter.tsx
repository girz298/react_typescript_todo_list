import * as React from 'react';

import {Route, Switch} from "react-router";
import Root from "./Root";
import LoginForm from "./LoginPage/LoginForm";


class MainRouter extends React.Component {
    public render() {
        return (
            <Switch>
                <Route exact={true} path='/' component={Root}/>
                <Route exact={true} path='/login' component={LoginForm}/>
                <Route exact={true} path='/projects' component={Root}/>
            </Switch>
        );
    }
}

export default MainRouter;
