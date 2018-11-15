import * as React from 'react';

import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {renderTextField} from "../../redux-material-bridge/text-field";
import {Grid} from "@material-ui/core";

export const FORM_NAME = 'RegistrationForm';

interface IFormFields {
    username?: string;
    password?: string;
    repeatPassword?: string;
}

interface IProps {
    className?: string;
}

class RegistrationForm extends React.Component<IProps & InjectedFormProps<{}, IProps>> {
    public render() {
        return (
            <form className={this.props.className} onSubmit={this.props.handleSubmit}>
                <Grid container={true} spacing={16}>
                    <Grid item={true} xs={12}>
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
                    <Grid item={true} xs={12}>
                        <Field
                            component={renderTextField}
                            label="Repeat password *"
                            name="repeatPassword"
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
        const passwordsDontMatchErrorMessage: string = 'Password don\'t match.';

        if (values.password && values.password.length < 8) {
            errors.password = 'Length should be more than 8';
        }

        if (values.repeatPassword && values.repeatPassword.length < 8) {
            errors.repeatPassword = 'Length should be more than 8';
        }

        if (errors.password || errors.repeatPassword) {
            return errors;
        }


        if (values.password !== values.repeatPassword) {
            errors.password = passwordsDontMatchErrorMessage;
            errors.repeatPassword = passwordsDontMatchErrorMessage;
        }

        console.log('ERROR: ', errors);
        return errors;
    }
})(RegistrationForm);
