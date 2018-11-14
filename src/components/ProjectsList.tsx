import * as React from 'react';

import {Grid, Paper, Typography, WithStyles, withStyles} from "@material-ui/core";
import { connect } from 'react-redux'
import {getProjectsAction} from "../actions/projects";


const styles = (theme: any) => ({
    input: {
        display: 'none',
    },
    paddingTop: {
        marginTop: theme.spacing.unit,
    },
});

interface IProps {
    getProjectsAction: () => void;
    projects?: [];
}

class ProjectsList extends React.Component<IProps & WithStyles> {

    public componentWillMount() {
        this.props.getProjectsAction();
    }

    public render() {
        return (
            <Grid container={true} className={this.props.classes.paddingTop}>

                    {this.props.projects && this.props.projects.map((el: IProject, id)=>{
                        return (
                            <Grid
                                container={true}
                                key={id}
                                className={this.props.classes.paddingTop}
                                spacing={8}
                            >
                                <Grid item={true} xs={2}>
                                    <Paper>
                                        <Typography variant={"h5"} align={"center"}>
                                            {el.id}
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid item={true} xs={10}>
                                    <Paper>
                                        <Typography variant={"h5"} align={"center"}>
                                            {el.name}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>
                        );
                    })}
            </Grid>
        );
    }
}

export default connect((state: IState) => {
    return {
        projects: state.projects
    };
}, {
    getProjectsAction
})(withStyles(styles)(ProjectsList));
