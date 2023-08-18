import { FC } from "react";
import { INewMessage } from "../../interface/NewMessage";
import dayjs from "dayjs";
import './newMessage.sass';


export const NewMessage: FC<INewMessage> = (props: INewMessage) => {

    const {date} = props;

    return(
        <div className="NewMessage">
            Новове сообщение
        </div>
    )
}   