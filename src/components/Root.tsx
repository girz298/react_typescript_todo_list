import * as React from 'react';

import {Grid} from "@material-ui/core";
import ProjectsList from "./ProjectsList";
import CreateProjectForm from "./CreateProjectForm";


class Root extends React.Component {

    public render() {
        return (
            <Grid container={true} spacing={8}>
                <Grid item={true} xs={4} />
                <Grid item={true} xs={4}>
                    <CreateProjectForm />
                    <ProjectsList />
                </Grid>
                <Grid item={true} xs={4} />
            </Grid>
        );
    }
}

export default Root;
