import { FC, useContext, useEffect, useState } from "react";
import type { } from 'redux-thunk/extend-redux';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IMessage } from "../../interface/Message";
import { useActions } from "../../hooks/useActions";
import "./message.sass";
import { Avatar } from "../Avatar";
import dayjs from "dayjs";
import { MessageBlock } from "./MessageBlock";
import { stringify } from "querystring";
import { SystemMessage } from "../SystemMessage/SystemMessage";



export const Message: FC<IMessage> = (props: IMessage) => {
    const { message, error, loading } = useTypedSelector(state => state.message)
    const { chatId } = useTypedSelector(state => state.info)
    const { fetchMessage } = useActions()


    useEffect(() => {
        if (chatId) {
            fetchMessage(chatId)
        }
    }, [chatId])


    if (loading) {
        return <h3>Загрузка...</h3>
    }

    if (error) {
        return <h3>{error}</h3>
    }


    return (
        <div className="messages">
            {message.slice().reverse().map((messages, i) => {
                if (i == 0) {
                    return (
                        <div className="messages-flex">
                            <SystemMessage date={messages.created_at} />
                            <MessageBlock my={messages.user.you} messageIn={messages} />
                        </div>
                    )
                } else if ((Number(messages.created_at) - Number(message[message.length - i].created_at)) <= 86400) {
                    if (message[message.length - i].user.id == messages.user.id) {
                        return (
                            <div className="messages-flex">
                                <MessageBlock my={messages.user.you} main={true} messageIn={messages} />
                            </div>
                        )
                    } else {
                        return (
                            <div className="messages-flex">
                                <MessageBlock my={messages.user.you} main={false} messageIn={messages} />
                            </div>
                        )
                    }
                } else {
                    if (message[message.length - i].user.id == messages.user.id) {
                        return (
                            <div className="messages-flex">
                                <SystemMessage date={messages.created_at} />
                                <MessageBlock my={messages.user.you} main={true} messageIn={messages} />
                            </div>
                        )
                    } else {
                        return (
                            <div className="messages-flex">
                                <SystemMessage date={messages.created_at} />
                                <MessageBlock my={messages.user.you} main={false} messageIn={messages} />
                            </div>
                        )
                    }
                }
            }
            )}
        </div>
    )
}

