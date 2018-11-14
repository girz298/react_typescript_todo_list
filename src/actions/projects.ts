import Project from "../action_types/project";

export function addProjectAction(project: IProject): IAction {
    return {
        payload: project,
        type: Project.ADD_PROJECT
    };
}