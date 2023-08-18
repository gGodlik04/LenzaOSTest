import { FC, useEffect } from "react";
import type { } from 'redux-thunk/extend-redux';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IHeader } from "../../interface/Header";
import "./header.sass";
import titleSvg from "../../svg/title.svg"
import { HandySvg } from "handy-svg";



export const Header: FC<IHeader> = (props: IHeader) => {
    // const {title} = props;
    const { chats, error, loading } = useTypedSelector(state => state.chat);
    const { title } = useTypedSelector(state => state.info)

    useEffect(() => {
    }, [])

    if (loading) {
        return <h3>Загрузка...</h3>
    }

    return (
        <div className="Header">
            <HandySvg
                src={titleSvg.toString()}
                width="24"
                height="24"
            />
            <div>{title}</div>
        </div>
    )
}