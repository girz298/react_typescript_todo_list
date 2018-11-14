import {User} from "../../action_types/user";

const defaultAction: IAction = {
    payload: [],
    type: 'default'
};

const initState = {};

export default function reduce( state = initState, action: IAction = defaultAction) {
    switch (action.type) {
        case User.LOGGED_IN:
            return state;
        case 'default':
            return state;
    }

    return state;
}