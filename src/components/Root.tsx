import * as React from 'react';

import {Button, Grid, Paper, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {Dispatch} from "redux";


const styles = (theme: any) => ({
    button: {
        marginTop: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class Root extends React.Component<{
    dispatch: Dispatch;
} & WithStyles> {

    public render() {
        return (
            <Grid container={true}>
                <Grid item={true} xs={4} />
                <Grid item={true} xs={4}>
                    <Paper>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi
                        deleniti doloribus earum error, est explicabo laudantium nam perferendis quas quisquam,
                        sint sit vitae voluptatibus.
                    </Paper>

                    <Button
                        onClick={this.draw}
                        fullWidth={true}
                        variant="outlined"
                        color="primary"
                        className={this.props.classes.button}
                    >
                        Dispatch
                    </Button>

                </Grid>
                <Grid item={true} xs={4} />
            </Grid>
        );
    }

    private draw = () => {
        this.props.dispatch({
            payload: [],
            type: 'great'
        });
    }
}

export default connect(null, (dispatch) => {
     return {
         dispatch,
     };
})(withStyles(styles)(Root));
