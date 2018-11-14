import Project from "../../action_types/project";

const defaultAction: IAction = {
    payload: [],
    type: 'default'
};

const initState: IProject[] = [];

export default function reduce( state: IProject[] = initState, action: IAction = defaultAction) {
    switch (action.type) {
        case Project.ADD_PROJECT:
            const newState = [...state, ...action.payload];
            console.log('Project was added');
            return newState;
        case 'default':
            console.log('Default ACTION WORKED');
            return state;
    }

    return state;
}