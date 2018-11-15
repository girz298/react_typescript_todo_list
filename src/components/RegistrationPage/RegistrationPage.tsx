import * as React from 'react';

import {Button, Grid, Paper, Typography, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {LoginActionType, loginAction} from "../../actions/user";
import {RouteComponentProps, withRouter} from "react-router";
import {GuestRoutes} from "../../constants/urls";
import RegistrationForm, {FORM_NAME, IFormFields} from "./RegistrationForm";
import {submitForm, SubmitFormActionType} from "../../actions/forms";
import {SubmissionError} from "redux-form";
import {EMPTY_FIELD_ERROR} from "../../redux-material-bridge/text-field";
import * as _ from 'lodash';

const styles = (theme: any) => ({
    bigMarginTop: {
        marginTop: theme.spacing.unit*30
    },
    button: {
        marginTop: theme.spacing.unit*2,
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
    submitForm: SubmitFormActionType;
}

interface IState {
    username: string;
    password: string;
}

class RegistrationPage extends React.Component<IProps & WithStyles & RouteComponentProps, IState> {
    public render() {
        return (
            <Grid container={true} className={this.props.classes.bigMarginTop}>
                <Grid item={true} xs={4} />
                <Grid item={true} xs={4}>
                    <Paper className={this.props.classes.paperPadding}>
                        <Typography
                            variant={"h4"}
                            align={"center"}
                        >
                            Let's register you buddy
                        </Typography>

                        <RegistrationForm
                            className={this.props.classes.button}
                            onSubmit={this.handleSubmit}
                        />

                        <Grid container={true}>
                            <Grid item={true} xs={4}>
                                <Button
                                    size={"large"}
                                    onClick={this.backToLoginPage}
                                    fullWidth={true}
                                    variant="outlined"
                                    color="default"
                                    className={this.props.classes.submitButtonMarginTop}
                                >
                                    Back&nbsp;to&nbsp;login&nbsp;page
                                </Button>
                            </Grid>
                            <Grid item={true} xs={4}/>
                            <Grid item={true} xs={4}>
                                <Button
                                    size={"large"}
                                    onClick={this.register}
                                    fullWidth={true}
                                    variant="outlined"
                                    color="primary"
                                    className={this.props.classes.submitButtonMarginTop}
                                >
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item={true} xs={4} />
            </Grid>
        );
    }

    private backToLoginPage = () => {
        this.props.history.push(GuestRoutes.LOGIN_PAGE);
    };

    private register = () => {
        this.props.submitForm(FORM_NAME);
    };

    private handleSubmit = (values: IFormFields) => {
        const errors: IFormFields = {};

        if (!values.username) {
            errors.username = EMPTY_FIELD_ERROR;
        }

        if (!values.password) {
            errors.password = EMPTY_FIELD_ERROR;
        }

        if (!values.repeatPassword) {
            errors.repeatPassword = EMPTY_FIELD_ERROR;
        }

        if (!_.isEmpty(errors)) {
            throw new SubmissionError(errors);
        }

        console.log(values);
    }

}

export default withRouter(connect(null, {
    login: loginAction,
    submitForm

})(withStyles(styles)(RegistrationPage)));
