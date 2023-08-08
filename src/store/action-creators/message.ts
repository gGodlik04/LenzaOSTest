import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import { MessageAction, MessageActionTypes } from "../../types/message"





export const fetchMessage = () => {
    return async (dispatch: Dispatch<MessageAction>) => {
        try {
            dispatch({type: MessageActionTypes.FETCH_MESSAGE})
            const response = await axios.get('https://api.lenzaos.com/message.get?chat_id=4961bbba-9b9e-4523-ab2a-ecfeeb7a4913&offset=0&limit=5',{
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

