import { FC, useEffect, useState } from "react";
import type { } from 'redux-thunk/extend-redux';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IMessage } from "../../interface/Message";
import { useActions } from "../../hooks/useActions";
import "./message.sass";
import { MessageBlock } from "./MessageBlock";
import { SystemMessage } from "../SystemMessage/SystemMessage";
import { NewMessage } from "../NewMessage/NewMessage";



export const Message: FC<IMessage> = (props: IMessage) => {

    const { message, error, loading } = useTypedSelector(state => state.message)
    const { chatId } = useTypedSelector(state => state.info)
    const { textOfMessage } = useTypedSelector(state => state.newMessage);

    const { fetchMessage } = useActions()


    useEffect(() => {
        if (chatId) {
            fetchMessage(chatId)
        }
        window.scrollTo(0, document.body.scrollHeight);
    }, [chatId])

    useEffect(() => {
        const test = document.querySelector('.messages');
        test?.scrollTo(100, document.body.scrollHeight);
    })

    useEffect(() => {
    }, [textOfMessage])


    if (loading) {
        return <h3>Загрузка...</h3>
    }

    if (error) {
        return <h3>{error}</h3>
    }

    const pushMyMessage = () => {
        if (textOfMessage.length >= 1) {
            return (
                <div>
                    {
                        textOfMessage.map((elem) => {
                            return (
                                <MessageBlock my={true} main={false} messageIn={elem} />
                            )
                        })
                    }
                </div>
            )
        }
    }


    return (
        <div className="messages">
            {message.slice().reverse().map((messages, i) => {


                if (i == 0) {
                    if (messages.is_new && !message[message.length - i].is_new) {
                        return (
                            <div>
                                <SystemMessage date={messages.created_at} />
                                <NewMessage />
                                <MessageBlock my={messages.user.you} messageIn={messages} />
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <SystemMessage date={messages.created_at} />
                                <MessageBlock my={messages.user.you} messageIn={messages} />
                            </div>
                        )
                    }
                }

                if ((Number(messages.created_at) - Number(message[message.length - i].created_at)) <= 86400) {
                    if (message[message.length - i].user.id == messages.user.id) {
                        if (messages.is_new && !message[message.length - i].is_new) {
                            return (
                                <div>
                                    <NewMessage />
                                    <MessageBlock my={messages.user.you} main={true} messageIn={messages} />
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <MessageBlock my={messages.user.you} main={true} messageIn={messages} />
                                </div>
                            )
                        }
                    } else {
                        if (messages.is_new && !message[message.length - i].is_new) {
                            return (
                                <div>
                                    <NewMessage />
                                    <MessageBlock my={messages.user.you} main={false} messageIn={messages} />
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <MessageBlock my={messages.user.you} main={false} messageIn={messages} />
                                </div>
                            )
                        }
                    }
                }
                if (message[message.length - i].user.id == messages.user.id) {
                    if (messages.is_new && !message[message.length - i].is_new) {
                        return (
                            <div>
                                <SystemMessage date={messages.created_at} />
                                <NewMessage />
                                <MessageBlock my={messages.user.you} main={true} messageIn={messages} />
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <SystemMessage date={messages.created_at} />
                                <MessageBlock my={messages.user.you} main={true} messageIn={messages} />
                            </div>
                        )
                    }
                } else {
                    if (messages.is_new && !message[message.length - i].is_new) {
                        return (
                            <div>
                                <SystemMessage date={messages.created_at} />
                                <MessageBlock my={messages.user.you} main={false} messageIn={messages} />
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <SystemMessage date={messages.created_at} />
                                <MessageBlock my={messages.user.you} main={false} messageIn={messages} />
                            </div>
                        )
                    }
                }
            }
            )}
            {
                pushMyMessage()
            }
        </div>
    )
}







// if (i == 0) {
//     return (
//         <div>
//             <SystemMessage date={messages.created_at} />
//             <MessageBlock my={messages.user.you} messageIn={messages} />
//         </div>
//     )
// } else if ((Number(messages.created_at) - Number(message[message.length - i].created_at)) <= 86400) {
//     if (message[message.length - i].user.id == messages.user.id) {
//         return (
//             <div>
//                 <MessageBlock my={messages.user.you} main={true} messageIn={messages} />
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <MessageBlock my={messages.user.you} main={false} messageIn={messages} />
//             </div>
//         )
//     }
// } else {
//     if (message[message.length - i].user.id == messages.user.id) {
//         return (
//             <div>
//                 <SystemMessage date={messages.created_at} />
//                 <MessageBlock my={messages.user.you} main={true} messageIn={messages} />
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <SystemMessage date={messages.created_at} />
//                 <MessageBlock my={messages.user.you} main={false} messageIn={messages} />
//             </div>
//         )
//     }
// }