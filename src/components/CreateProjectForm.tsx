import * as React from 'react';

import {Button, Grid, TextField, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {addProjectAction} from "../actions/projects";

const styles = (theme: any) => ({
    button: {
        marginTop: theme.spacing.unit,
    }
});

interface IProps {
    addProject: (project: IProject) => void;
}

interface IState {
    projectId: number;
    projectName: string;
}

class CreateProjectForm extends React.Component<IProps & WithStyles, IState> {
    public state: Readonly<IState> = {
        projectId: 0,
        projectName: '',
    };

    public render() {
        return (
            <form noValidate={true} autoComplete="off">
                <Grid container={true} spacing={8}>
                    <Grid item={true} xs={2}>
                        <TextField
                            fullWidth={true}
                            id="outlined-name"
                            label="Id"
                            name="projectId"
                            type="number"
                            value={this.state.projectId}
                            onChange={this.handleChangeId}
                            className={this.props.classes.button}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item={true} xs={10}>
                            <TextField
                                fullWidth={true}
                                id="outlined-name"
                                label="Name"
                                name="projectName"
                                value={this.state.projectName}
                                onChange={this.handleChangeName}
                                className={this.props.classes.button}
                                variant="outlined"
                            />
                    </Grid>
                    <Grid item={true} xs={12}>
                        <Button
                            size={"large"}
                            onClick={this.saveProject}
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

    private saveProject = () => {
        this.props.addProject({
            id: this.state.projectId,
            name: this.state.projectName,
        });
    };


    private handleChangeId = (event: any) => {
        this.setState({projectId: event.target.value});
    };

    private handleChangeName = (event: any) => {
        this.setState({projectName: event.target.value});
    };
}

export default connect(null, {
    addProject: addProjectAction
})(withStyles(styles)(CreateProjectForm));
