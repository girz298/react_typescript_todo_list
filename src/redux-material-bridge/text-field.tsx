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

export const EMPTY_FIELD_ERROR = 'Required';

// TODO: Fix bug with <p> cannot appear as a descendant of <p>

export const renderTextField = ({input, required, value, label, meta: { touched, error }, ...custom}: IReduxTextField & TextFieldProps) => {
    const isRequired: boolean | undefined = (touched && required && !input.value);

    return (
        <TextField
            label={label}
            error={!!error || !!isRequired}
            {...input}
            {...custom}
            helperText={(error || !!isRequired) && (
                <FormHelperText >
                    {isRequired ? EMPTY_FIELD_ERROR : error}
                </FormHelperText>
                )
            }
        />
    );
};
