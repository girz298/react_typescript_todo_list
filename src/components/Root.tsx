import * as React from 'react';

import {Button, Grid, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {Dispatch} from "redux";
import ProjectsList from "./ProjectsList";


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
            <Grid container={true} spacing={8}>
                <Grid item={true} xs={4} />
                <Grid item={true} xs={4}>
                    <Button
                        onClick={this.draw}
                        fullWidth={true}
                        variant="outlined"
                        color="primary"
                        className={this.props.classes.button}
                    >
                        Dispatch
                    </Button>
                    <ProjectsList />
                </Grid>
                <Grid item={true} xs={4} />
            </Grid>
        );
    }

    private draw = () => {
        this.props.dispatch({
            payload: [
                {name: 'payload1'},
                {name: 'payload2'},
                {name: 'payload3'}
            ],
            type: 'great'
        });
    }
}

export default connect(null, (dispatch) => {
     return {
         dispatch,
     };
})(withStyles(styles)(Root));
