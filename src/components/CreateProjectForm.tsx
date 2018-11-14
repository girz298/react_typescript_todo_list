import * as React from 'react';

import {Button, Grid, TextField, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {addProjectAction} from "../actions/projects";

const styles = (theme: any) => ({
    button: {
        marginTop: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

interface IProps {
    addProject: (project: IProject) => void;
}

interface IState {
    projectName: string
}

class CreateProjectForm extends React.Component<IProps & WithStyles, IState> {
    public state: Readonly<IState> = {
        projectName: ''
    };

    public render() {
        return (
            <form noValidate={true} autoComplete="off">
                <Grid container={true} spacing={8}>
                    <Grid item={true} xs={12}>
                            <TextField
                                fullWidth={true}
                                id="outlined-name"
                                label="Name"
                                name="projectName"
                                value={this.state.projectName}
                                onChange={this.handleChange}
                                className={this.props.classes.button}
                                variant="outlined"
                            />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Button
                            size={"large"}
                            onClick={this.draw}
                            fullWidth={true}
                            variant="outlined"
                            color="primary"
                            className={this.props.classes.button}
                        >
                            Dispatch
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }

    private draw = () => {
        this.props.addProject({name: this.state.projectName});
    };

    private handleChange = (event: any) => {
        this.setState({projectName: event.target.value});
    }
}

export default connect(null, {
    addProject: addProjectAction
})(withStyles(styles)(CreateProjectForm));
