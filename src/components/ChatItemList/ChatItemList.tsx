import React, {FC, createContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import type {} from 'redux-thunk/extend-redux';
import { fetchChats } from "../../store/action-creators/chat";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IChatItemList} from "../../interface/ChatItemList";
import { useActions } from "../../hooks/useActions";
import { Message } from "../../components/Message/Message";



export const ChatItemList: FC<IChatItemList> = (props: IChatItemList) => {
    const { title } = props;
    const {chats, error, loading} = useTypedSelector(state => state.chat);
    const {fetchChats} = useActions();
    
    const [chatId, setChatId] = useState<string>();
    
    const loadChatMessages = (event: React.MouseEvent<HTMLDivElement>) : any => {
        const {target} = event;
        const chatToId  = chats.filter((elem) => {return elem.title == (target as HTMLButtonElement).innerHTML})
        setChatId(chatToId[0].id);
    }
    
    useEffect(() => {
        fetchChats()
    }, [])

    useEffect(() => {
        if (chats.length != 0) {
            const id = chats[0].id
            setChatId(id);
        }
    },[chats])

    if (loading) {  
        return <h3>Загрузка...</h3>
    }

    if (error)
    {
        return <h3>{error}</h3>
    }
    return (
        <div>
            {chats.map(chat => {
                return(
                <div onClick={loadChatMessages}>{chat.title}</div>
                )
            })}
                <Message chatId = {chatId}/>
        </div>
    )
}