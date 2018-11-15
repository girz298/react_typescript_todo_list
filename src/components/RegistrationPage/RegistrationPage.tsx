import * as React from 'react';

import {Button, Grid, Paper, Typography, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {ILoginAction, loginAction} from "../../actions/user";
import {RouteComponentProps, withRouter} from "react-router";
import {GuestRoutes} from "../../constants/urls";
import RegistrationForm, {FORM_NAME} from "./RegistrationForm";
import {submitForm, SubmitFormType} from "../../actions/forms";

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
    login: ILoginAction;
    submitForm: SubmitFormType;
}

interface IState {
    username: string;
    password: string;
}

class RegistrationPage extends React.Component<IProps & WithStyles & RouteComponentProps, IState> {
    public state: Readonly<IState> = {
        password: '',
        username: '',
    };

    public render() {
        return (
            <Grid container={true} spacing={8} className={this.props.classes.bigMarginTop}>
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
                                    onClick={this.login}
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

    private login = () => {
        this.props.submitForm(FORM_NAME);
    };

    private handleSubmit = (values: any) => {
        console.log(values);
    }

}

export default withRouter(connect(null, {
    login: loginAction,
    submitForm

})(withStyles(styles)(RegistrationPage)));
