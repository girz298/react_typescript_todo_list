import Project from "../action_types/project";
import {Dispatch} from "redux";

export function addProjectAction(project: IProject) {
    return (dispatch: Dispatch) => {
        dispatch({payload: project,type: Project.ADD_PROJECT}) ;
    }
}