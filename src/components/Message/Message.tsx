import {FC, useContext, useEffect, useState} from "react";
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IMessage } from "../../interface/Message";
import { useActions } from "../../hooks/useActions";
import { Console } from "console";

export const Message: FC<IMessage> = (props: IMessage) => {
    const { title } = props;
    const chatId: string = props.chatId!;
    const {message, error, loading} = useTypedSelector(state => state.message)
    const {fetchMessage} = useActions()


    const [fetchIdMessage, setFetchIdMessage] = useState()
      

    useEffect(() => {
        console.log(chatId)
        if (chatId){fetchMessage(chatId)}
    },[chatId])
    
    if (loading) {  
        return <h3>Загрузка...</h3>
    }
    
    if (error)
    {
        return <h3>{error}</h3>
    }
    
    return (
        <div>
            {message.map(messages => {
                return(
                <div>{messages.message}</div>
                )
            })}
        </div>
    )
}