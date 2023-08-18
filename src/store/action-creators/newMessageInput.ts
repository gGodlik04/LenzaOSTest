import { Dispatch } from "@reduxjs/toolkit"
import { IDeleteNewMessageInputTextAction, ISetNewMessageInputTextAction, NewMessageInputActionTypes } from "../../types/newMessageInput"





export const newMessageInput = (text: string) => {
    return (dispatch: Dispatch<ISetNewMessageInputTextAction>) => {
            dispatch({type: NewMessageInputActionTypes.SET_TEXT, payload: text})
    }
}

export const clearArray = () => {
    return (dispatch: Dispatch<IDeleteNewMessageInputTextAction>) => {
            dispatch({type: NewMessageInputActionTypes.DELETE})
    }
}








