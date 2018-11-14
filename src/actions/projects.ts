import Project from "../action_types/project";
import {Dispatch} from "redux";
import {getProjects} from "../api/requests/projects";

export function addProjectAction(project: IProject) {
    return (dispatch: Dispatch) => {
        dispatch({payload: project,type: Project.ADD_PROJECT}) ;
    }
}

export function getProjectsAction() {
    return async (dispatch: Dispatch) => {
        const projects = await getProjects();
        dispatch({payload: projects,type: Project.GET_PROJECTS}) ;
    }
}