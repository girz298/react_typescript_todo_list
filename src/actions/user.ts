import {Dispatch} from "redux";
import { push } from 'react-router-redux';

export type ILoginAction = (username: string, password: string) => void;

export const loginAction: ILoginAction = () => {
    return (dispatch: Dispatch) => {
        console.log('LOGGED IN');
        dispatch({type: 'Logged In'});
        dispatch(push('/'));
    };
};