import { FC } from "react";
import type { } from 'redux-thunk/extend-redux';
import { IMessageBlock } from "../../interface/MessageBlock";
import { Avatar } from "../Avatar";
import dayjs from "dayjs";
import ReadSvg from "../../svg/readed.svg"
import { HandySvg } from "handy-svg";




export const MessageBlock: FC<IMessageBlock> = (props: IMessageBlock) => {
    const { my, main, messageIn } = props


    if (my) {
        return (
            <div className="Message-my" key={messageIn.id}>
                <div className="Message-my__text" >{messageIn.message}</div>
                <div className="Message-my__date" >{dayjs(Number(messageIn.created_at) * 1000).format('HH:mm')}</div>
                <div className="Message-my__svg">
                    <HandySvg
                        src={ReadSvg.toString()}
                        width="16"
                        height="10"
                    />
                </div>
            </div>
        )
    }
    if (!my) {
        if (main) {
            return (
                <div className="Message-without-avatar" key={messageIn.id}>
                    <div className="Message-without-avatar__text" >{messageIn.message}</div>
                    <div className="Message-without-avatar__date" >{dayjs(Number(messageIn.created_at) * 1000).format('HH:mm')}</div>
                </div>
            )
        } else {
            return (
                <div className="Message-avatar" key={messageIn.id}>
                    <div className="Message-avatar-wrap">
                        <Avatar size="sm" src={messageIn.user.avatar} />
                        <div>
                            <div className="Message-avatar-wrap__name" >{messageIn.user.name} {messageIn.user.surname}</div>
                            <div className="Message-avatar-wrap-text">
                                <div className="Message-avatar-wrap-text__text">{messageIn.message}</div>
                                <div className="Message-avatar-wrap-text__date" >{dayjs(Number(messageIn.created_at) * 1000).format('HH:mm')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (<div></div>)

}


