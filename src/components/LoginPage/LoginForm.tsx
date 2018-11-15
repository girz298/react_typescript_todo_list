import * as React from 'react';

import {Button, Grid, Paper, TextField, Typography, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {LoginActionType, loginAction} from "../../actions/user";
import {RouteComponentProps, withRouter} from "react-router";
import {GuestRoutes} from "../../constants/urls";

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

class LoginForm extends React.Component<IProps & WithStyles & RouteComponentProps, IState> {
    public state: Readonly<IState> = {
        password: '',
        username: '',
    };

    public render() {
        return (
            <form noValidate={true} autoComplete="off" className={this.props.classes.bigMarginTop}>
                <Grid container={true} spacing={8}>
                    <Grid item={true} xs={4} />
                    <Grid item={true} xs={4}>
                        <Paper className={this.props.classes.paperPadding}>
                            <Typography
                                variant={"h4"}
                                align={"center"}
                            >
                                Welcome to To-Do
                            </Typography>

                            <TextField
                                fullWidth={true}
                                label="Username*"
                                name="username"
                                type="string"
                                required={true}
                                value={this.state.username}
                                onChange={this.handleChangeUsername}
                                className={this.props.classes.button}
                                variant="outlined"
                            />

                            <TextField
                                fullWidth={true}
                                label="Password*"
                                name="password"
                                type={"password"}
                                required={true}
                                value={this.state.password}
                                onChange={this.handleChangePassword}
                                className={this.props.classes.button}
                                variant="outlined"
                            />

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


    private handleChangeUsername = (event: any) => {
        this.setState({username: event.target.value});
    };

    private handleChangePassword = (event: any) => {
        this.setState({password: event.target.value});
    };
}

export default withRouter(connect(null, {
    login: loginAction
})(withStyles(styles)(LoginForm)));
