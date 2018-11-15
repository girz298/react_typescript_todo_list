import * as React from 'react';

import {Field, FormErrors, InjectedFormProps, reduxForm} from "redux-form";
import {renderTextField} from "../../redux-material-bridge/text-field";
import {Grid, WithStyles, withStyles} from "@material-ui/core";
import {guestFormsStyles} from "../../styles/styles";

export const FORM_NAME = 'LoginForm';

export interface IFormFields extends FormErrors {
    username?: string;
    password?: string;
}

interface IProps {
    className?: string;
}


class LoginForm extends React.Component<IProps & InjectedFormProps<{}, IProps> & WithStyles> {
    public render() {
        return (
            <form className={this.props.className} onSubmit={this.props.handleSubmit}>
                <Grid container={true} spacing={16}>
                    <Grid item={true} xs={12} className={this.props.classes.loginForm}>
                        <Field
                            component={renderTextField}
                            label="Username *"
                            name="username"
                            type={"string"}
                            required={true}
                            fullWidth={true}
                            variant={"outlined"}
                        />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Field
                            component={renderTextField}
                            label="Password *"
                            name="password"
                            type={"password"}
                            required={true}
                            fullWidth={true}
                            variant={"outlined"}
                        />
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default reduxForm<{}, IProps>({
    form: FORM_NAME,
    validate: (values: IFormFields) => {
        const errors: IFormFields = {};
        console.log(errors);
        return errors;
    }
})(withStyles(guestFormsStyles)(LoginForm));
