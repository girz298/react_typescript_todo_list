import {Dispatch} from "redux";
import {submit} from "redux-form";
import {ReturnDispatchType} from "../types/redux";

export type SubmitFormActionType = (formName: string) => ReturnDispatchType;

export const submitForm: SubmitFormActionType = (formName: string) => {
    return (dispatch: Dispatch) => {
        console.log('FORM "' + formName + '" REMOTELY SUBMITTED');
        dispatch(submit(formName)) ;
    }
};