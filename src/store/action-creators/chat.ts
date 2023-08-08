import { Dispatch } from "@reduxjs/toolkit"
import { ChatsAction, ChatsActionTypes } from "../../types/chat"
import axios from "axios"





export const fetchChats = () => {
    return async (dispatch: Dispatch<ChatsAction>) => {
        try {
            dispatch({type: ChatsActionTypes.FETCH_CHATS})
            const response = await axios.get('https://api.lenzaos.com/message.get',{
                headers:{
                    'Content-Type': 'application/json',
                    'version': '0.0'
                }
            })
            dispatch({type: ChatsActionTypes.FETCH_CHATS_SUCCESS, payload: response.data.response})
        } catch (error) {
            dispatch({
                type: ChatsActionTypes.FETCH_CHATS_ERROR,
                payload: "Произошла ошибка при загрузке чатов"
            })
        }
    }
}

