import * as React from 'react';

import {Button, Grid, Paper, Typography, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {LoginActionType, loginAction} from "../../actions/user";
import {RouteComponentProps, withRouter} from "react-router";
import {GuestRoutes} from "../../constants/urls";
import LoginForm from "./LoginForm";

const styles = (theme: any) => ({
    bigMarginTop: {
        marginTop: theme.spacing.unit*40
    },
    button: {
        marginTop: theme.spacing.unit,
    },
    paperPadding: {
        padding: theme.spacing.unit*4
    },
    submitButtonMarginTop: {
        marginTop: theme.spacing.unit*3
    }
});

interface IProps {
    login: LoginActionType;
}

interface IState {
    username: string;
    password: string;
}

class LoginPage extends React.Component<IProps & WithStyles & RouteComponentProps, IState> {
    public state: Readonly<IState> = {
        password: '',
        username: '',
    };

    public render() {
        return (
            <form noValidate={true} autoComplete="off" className={this.props.classes.bigMarginTop}>
                <Grid container={true}>
                    <Grid item={true} xs={4} />
                    <Grid item={true} xs={4}>
                        <Paper className={this.props.classes.paperPadding}>
                            <Typography
                                variant={"h4"}
                                align={"center"}
                            >
                                Welcome to To-Do
                            </Typography>

                            <LoginForm />

                            <Grid container={true}>
                                <Grid item={true} xs={4}>
                                    <Button
                                        size={"large"}
                                        onClick={this.goToRegisterPage}
                                        fullWidth={true}
                                        variant="outlined"
                                        color="default"
                                        className={this.props.classes.submitButtonMarginTop}
                                    >
                                        Create Account
                                    </Button>
                                </Grid>
                                <Grid item={true} xs={4}/>
                                <Grid item={true} xs={4}>
                                    <Button
                                        size={"large"}
                                        onClick={this.login}
                                        fullWidth={true}
                                        variant="outlined"
                                        color="primary"
                                        className={this.props.classes.submitButtonMarginTop}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={4} />
                </Grid>
            </form>
        );
    }

    private goToRegisterPage = () => {
        this.props.history.push(GuestRoutes.REGISTRATION_PAGE);
    };

    private login = () => {
        this.props.login(this.state.username, this.state.password);
    };

}

export default withRouter(connect(null, {
    login: loginAction
})(withStyles(styles)(LoginPage)));
