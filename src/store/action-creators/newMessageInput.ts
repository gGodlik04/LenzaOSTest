import { Dispatch } from "@reduxjs/toolkit"
import { ISetNewMessageInputTextAction, NewMessageInputActionTypes } from "../../types/newMessageInput"





export const newMessageInput = (text: string) => {
    return (dispatch: Dispatch<ISetNewMessageInputTextAction>) => {
            dispatch({type: NewMessageInputActionTypes.SET_TEXT, payload: text})
    }
}






