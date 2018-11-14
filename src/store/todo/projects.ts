import { Project } from "../../action_types/project";

const defaultAction: IAction = {
    payload: [],
    type: 'default'
};

const initState: IProject[] = [];

export default function reduce( state: IProject[] = initState, action: IAction = defaultAction) {
    switch (action.type) {
        case Project.ADD_PROJECT:
            console.log('Project was added');
            return [...state, ...action.payload];
        case Project.GET_PROJECTS:
            console.log('Project list received');
            return [...state, ...action.payload];
        case 'default':
            return state;
    }

    return state;
}