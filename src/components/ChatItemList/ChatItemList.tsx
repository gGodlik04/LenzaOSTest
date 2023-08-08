import React, {FC, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import type {} from 'redux-thunk/extend-redux';
import { fetchChats } from "../../store/action-creators/chat";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IChatItemList } from "../../interface/ChatItemList";
import { useActions } from "../../hooks/useActions";

export const ChatItemList: FC<IChatItemList> = (props: IChatItemList) => {
    const { title } = props;
    const {chats, error, loading} = useTypedSelector(state => state.chat)
    const {fetchChats} = useActions()      

    useEffect(() => {
        fetchChats()
    }, [])

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
                <div>{chat.title}</div>
                )
            })}
        </div>
    )
}