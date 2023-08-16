import { FC } from "react";
import type { } from 'redux-thunk/extend-redux';
import { IMessageBlock } from "../../interface/MessageBlock";
import { Avatar } from "../Avatar";
import dayjs from "dayjs";



export const MessageBlock: FC<IMessageBlock> = (props: IMessageBlock) => {
    const { my, main, messageIn } = props


    if (my) {
        return (
            <div style={{ color: 'red' }}>
                <div>{messageIn.message}</div>
                <div>{dayjs(Number(messageIn.created_at) * 1000).format('HH:mm')}</div>
            </div>
        )
    }
    if (!my) {
        if (main) {
            return (
                <div>
                    <div key={messageIn.id}>{messageIn.message}</div>
                    <div>{dayjs(Number(messageIn.created_at) * 1000).format('HH:mm')}</div>
                </div>
            )
        } else {
            return (
                <div>
                    <Avatar size="sm" src={messageIn.user.avatar} />
                    <div>{messageIn.user.name} {messageIn.user.surname}</div>
                    <div>
                        <div>{messageIn.message}</div>
                        <div>{dayjs(Number(messageIn.created_at) * 1000).format('HH:mm')}</div>
                    </div>
                </div>
            )
        }
    }

    return (<div></div>)

}


