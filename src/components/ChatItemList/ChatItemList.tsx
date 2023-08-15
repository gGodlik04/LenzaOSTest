import React, {FC, createContext, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import type {} from 'redux-thunk/extend-redux';
import { fetchChats } from "../../store/action-creators/chat";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IChatItemList} from "../../interface/ChatItemList";
import { useActions } from "../../hooks/useActions";
import { Message } from "../../components/Message/Message";
import { Header } from "../Header/Header";
import { activeClassOfChatListItem } from "../../utils/activeClass";
import { Avatar } from "../Avatar";
import "./chatItemList.sass";





export const ChatItemList: FC<IChatItemList> = (props: IChatItemList) => {

    const {chats, error, loading} = useTypedSelector(state => state.chat);
    const {fetchChats, setChatId, setTitle} = useActions();
    
    
    
    const loadChatMessages = (event: React.MouseEvent<HTMLDivElement>) : any => {

        const {target} = event;
        const chatToId  = chats.filter((elem) => {return elem.title == (target as HTMLButtonElement).innerHTML})
        setChatId(chatToId[0].id);

        activeClassOfChatListItem();
        setTitle(chatToId[0].title);
        event.currentTarget.classList.add('active');
        
    }
    
    useEffect(() => {
        fetchChats()
    }, [])

    useEffect(() => {
        if (chats.length != 0) {
            const activeItem = document.querySelector('.chatItemList__item');
            activeItem?.classList.add('active');
            setChatId(chats[0].id);
            setTitle(chats[0].title);
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
        <div className="chatItemList">
            <h1>All chats</h1>
            {chats.map(chat => {
                return(
                    <div className="chatItemlist-wrapper"> 
                        <Avatar src={chat.avatar}/>
                        <div className="chatItemList__item" onClick={loadChatMessages}>{chat.title}</div>
                    </div>
                )
            })}
        </div>
    )
}