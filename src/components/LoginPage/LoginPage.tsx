import * as React from 'react';

import {Button, Grid, Paper, Typography, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {LoginActionType, loginAction} from "../../actions/user";
import {RouteComponentProps, withRouter} from "react-router";
import {GuestRoutes} from "../../constants/urls";
import LoginForm, {FORM_NAME, IFormFields} from "./LoginForm";
import {submitForm, SubmitFormActionType} from "../../actions/forms";
import {SubmissionError} from "redux-form";
import {EMPTY_FIELD_ERROR} from "../../redux-material-bridge/text-field";
import * as _ from 'lodash';
import {guestFormsStyles} from "../../styles/styles";


interface IProps {
    login: LoginActionType;
    submitForm: SubmitFormActionType;
}

interface IState {
    username: string;
    password: string;
}

class LoginPage extends React.Component<IProps & WithStyles & RouteComponentProps, IState> {
    public render() {
        return (
            <Grid container={true} className={this.props.classes.bigMarginTop}>
                <Grid item={true} xs={12} md={4}/>
                <Grid item={true} xs={12} md={4}>
                    <Paper className={this.props.classes.paperPadding}>
                        <Typography
                            variant={"h4"}
                            align={"center"}
                        >
                            Welcome to To-Do
                        </Typography>

                        <LoginForm
                            className={this.props.classes.button + ' ' +  this.props.classes.formHeight}
                            onSubmit={this.handleSubmit}
                        />

                        <Grid container={true}>
                            <Grid item={true} xs={12} xl={4}>
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
                            <Grid item={true} xs={12} xl={4}/>
                            <Grid item={true} xs={12} xl={4}>
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
                <Grid item={true} xs={12} md={4}/>
            </Grid>
        );
    }

    private goToRegisterPage = () => {
        this.props.history.push(GuestRoutes.REGISTRATION_PAGE);
    };

    private login = () => {
        this.props.submitForm(FORM_NAME)
    };

    private handleSubmit = (values: IFormFields) => {
        const errors: IFormFields = {};

        if (!values.username) {
            errors.username = EMPTY_FIELD_ERROR;
        }

        if (!values.password) {
            errors.password = EMPTY_FIELD_ERROR;
        }

        if (!_.isEmpty(errors)) {
            throw new SubmissionError(errors);
        }

        if (values.username && values.password) {
            this.props.login(values.password, values.password);
            console.log(values);
        }
    }

}

export default withRouter(connect(null, {
    login: loginAction,
    submitForm
})(withStyles(guestFormsStyles)(LoginPage)));
