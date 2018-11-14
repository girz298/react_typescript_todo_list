export function addProjectAction(project: IProject): IAction {
    return {
        payload: project,
        type: 'great'
    };
}