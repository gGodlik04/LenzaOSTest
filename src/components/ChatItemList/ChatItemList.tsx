import React, { FC, HTMLProps, createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { } from 'redux-thunk/extend-redux';
import { fetchChats } from "../../store/action-creators/chat";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IChatItemList } from "../../interface/ChatItemList";
import { useActions } from "../../hooks/useActions";
import { Message } from "../../components/Message/Message";
import { Header } from "../Header/Header";
import { activeClassOfChatListItem } from "../../utils/activeClass";
import { Avatar } from "../Avatar";
import "./chatItemList.sass";
import { textSlice } from "../../utils/textSlice";
import dayjs from 'dayjs'
import { Node } from "typescript";
import { HandySvg } from "handy-svg";





export const ChatItemList: FC<IChatItemList> = (props: IChatItemList) => {
    
    const { chats, error, loading } = useTypedSelector(state => state.chat);
    const { fetchChats, setChatId, setTitle } = useActions();
    

    const loadChatMessages = (event: React.MouseEvent<HTMLDivElement>): any => {

        const chatToId = chats.filter((elem) => { return elem.id == event.currentTarget.accessKey })
        setChatId(event.currentTarget.accessKey);

        setTitle(chatToId[0].title);

        activeClassOfChatListItem();
        const elem = event.currentTarget.parentNode?.parentNode;
        const path: HTMLElement = elem as HTMLElement;
        path.classList.add('active');

    }

    useEffect(() => {
        fetchChats()
    }, [])

    useEffect(() => {
        if (chats.length != 0) {
            const activeItem = document.querySelector('.chatItemList-wrapper');
            activeItem?.classList.add('active');
            setChatId(chats[0].id);
            setTitle(chats[0].title);
        }
    }, [chats])

    if (loading) {
        return <h3>Загрузка...</h3>
    }

    if (error) {
        return <h3>{error}</h3>
    }

    const clickLoadChatMessages = (event: React.MouseEvent<HTMLElement>): any => {
        const target = event.currentTarget as HTMLElement;
        const path: HTMLElement = event.currentTarget.childNodes[1].childNodes[0] as HTMLElement;
        path.click()
    }


    return (
        <div className="chatItemList">
            {chats.map(chat => {
                return (
                    <div className="chatItemList-wrapper" onClick={clickLoadChatMessages}>
                        <Avatar src={chat.avatar} />
                        <div className="chatItemList-wrapper-date">
                            <div className="chatItemList__item" onClick={loadChatMessages} accessKey={chat.id} key={chat.id}>{textSlice(chat.title, 20)}</div>
                            <div className="chatItemList__date" accessKey={chat.id}>{dayjs(Number(chat.last_message.created_at) * 1000).format('HH:MM')}</div>
                            <div className="chatItemList__last-message" accessKey={chat.id}>{textSlice(chat.last_message.message, 60)}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
