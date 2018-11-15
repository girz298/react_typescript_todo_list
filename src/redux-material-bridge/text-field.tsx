import * as React from 'react';

import {FormHelperText, TextField} from "@material-ui/core";
import {TextFieldProps} from "@material-ui/core/TextField";

interface IReduxTextField {
    input?: any;
    label?: string;
    meta: {
        touched?: boolean;
        error?: string;
    }
}

export const renderTextField = ({input, label, meta: { touched, error }, ...custom}: IReduxTextField & TextFieldProps) => {
    return (
        <TextField
            label={label}
            error={error && true}
            {...input}
            {...custom}
            helperText={ error &&
                <FormHelperText>
                {error}
                </FormHelperText>
            }
        />
    );
};
