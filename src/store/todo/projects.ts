const defaultAction: IAction = {
    payload: [],
    type: 'default'
};

const initState: IProject[] = [];

export default function reduce( state: IProject[] = initState, action: IAction = defaultAction) {
    switch (action.type) {
        case 'great':
            const newState = [...state, ...action.payload];
            console.log('GREAT ACTION WORKED');
            return newState;
        case 'default':
            console.log('Default ACTION WORKED');
            return state;
    }

    return state;
}