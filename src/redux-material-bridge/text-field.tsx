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

// TODO: Fix bug with <p> cannot appear as a descendant of <p>

export const renderTextField = ({input, required, value, label, meta: { touched, error }, ...custom}: IReduxTextField & TextFieldProps) => {
    return (
        <TextField
            label={label}
            error={!!error || (touched && required && !input.value)}
            {...input}
            {...custom}
            helperText={ error && (
                <FormHelperText error={!!error}>
                    {error}
                </FormHelperText>
                )
            }
        />
    );
};
