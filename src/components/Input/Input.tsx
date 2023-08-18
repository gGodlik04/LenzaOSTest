import React, { FC, useEffect, useState } from "react";
import { IInput } from "../../interface/Input";
import './input.sass'
import buttonSubmitSvg from "../../svg/buttonSubmit.svg"
import clipSvg from "../../svg/clip.svg"
import { HandySvg } from "handy-svg";
import { useActions } from "../../hooks/useActions";



export const Input: FC<IInput> = (props: IInput) => {

    const { newMessageInput} = useActions();


    const submitMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault() // delete
        const textarea: HTMLInputElement = document.querySelector('.Input__form_textarea') as HTMLInputElement
        newMessageInput(textarea!.value)
        textarea!.value = '';
    }

    const clickSubmitMessage = (event: React.MouseEvent<HTMLDivElement>) => {
        const button: HTMLElement = document.querySelector('.Input__form_textarea_submitButton') as HTMLElement
        button.click()
    }



    return (
        <div className="Input">
            <form className="Input__form">
                <textarea className="Input__form_textarea" placeholder="Type messsage" rows={10}></textarea>
                <div className="Input__from-wrap">
                    <div>
                        <HandySvg
                            src={clipSvg.toString()}
                            width="32"
                            height="32"
                            className="clipSvg"
                        />
                    </div>
                    <button type="submit" className="Input__form_textarea_submitButton" onClick={submitMessage}></button>
                    <div onClick={clickSubmitMessage}>
                        <HandySvg
                            src={buttonSubmitSvg.toString()}
                            width="32"
                            height="32"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}   