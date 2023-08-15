import { Dispatch } from "@reduxjs/toolkit"
import { InfoAction, InfoActionTypes } from "../../types/info"





export const setChatId = (chatId: string) => {
    return (dispatch: Dispatch<InfoAction>) => {
            dispatch({type: InfoActionTypes.SET_CHATID, payload: chatId})
    }
}

export const setTitle = (title: string) => {
    return (dispatch: Dispatch<InfoAction>) => {
            dispatch({type: InfoActionTypes.SET_TITLE, payload: title})
    }
}

