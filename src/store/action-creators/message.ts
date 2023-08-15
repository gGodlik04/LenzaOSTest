import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { MessageAction, MessageActionTypes } from "../../types/message"





export const fetchMessage = (chatId:string) => {
    return async (dispatch: Dispatch<MessageAction>) => {
        try {
            const url = 'https://api.lenzaos.com/message.get?chat_id=' + chatId + '&offset=0&limit=10';
            dispatch({type: MessageActionTypes.FETCH_MESSAGE})
            const response = await axios.get(url,{
                headers:{
                    'Content-Type': 'application/json',
                    'version': '0.0'
                }
            })
            dispatch({type: MessageActionTypes.FETCH_MESSAGE_SUCCESS, payload: response.data.response})
        } catch (error) {
            dispatch({
                type: MessageActionTypes.FETCH_MESSAGE_ERROR,
                payload: "Произошла ошибка при загрузке чатов"
            })
        }
    }
}

