const defaultAction: IAction = {
    payload: [],
    type: 'default'
};

export default function reduce( initialState= {},action: IAction = defaultAction) {
    switch (action.type) {
        case 'great':
            console.log('GREAT ACTION WORKED');
            return initialState;
        case 'default':
            console.log('Default ACTION WORKED');
            return initialState;
    }

    return initialState;
}