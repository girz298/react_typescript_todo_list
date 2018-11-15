import * as React from 'react';

import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {renderTextField} from "../../redux-material-bridge/text-field";
import {Grid} from "@material-ui/core";

export const FORM_NAME = 'RegistrationForm';

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
                        label="Username"
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
                            label="Password"
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
                            label="Repeat password"
                            name="repeat_password"
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
    validate: values => {
        return {};
    }
})(RegistrationForm);
