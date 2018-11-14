import * as React from 'react';

import {TextField} from "@material-ui/core";

interface IReduxTextField {
    input?: any;
    label?: string;
    meta: {
        touched?: boolean;
        error?: string;
    }
}

export const renderTextField = ({input, label, meta: { touched, error }, ...custom}: IReduxTextField) => {
    return (
        <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    );
};
