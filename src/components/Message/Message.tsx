import {FC, useEffect} from "react";
import type {} from 'redux-thunk/extend-redux';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IMessage } from "../../interface/Message";
import { useActions } from "../../hooks/useActions";

export const Message: FC<IMessage> = (props: IMessage) => {
    const { title } = props;
    const {message, error, loading} = useTypedSelector(state => state.message)
    const {fetchMessage} = useActions()
      

    useEffect(() => {
        fetchMessage()
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
            {/* {console.log(message)}; */}
            {message.map(messages => {
                return(
                <div>{messages.id}</div>
                )
            })}
        </div>
    )
}