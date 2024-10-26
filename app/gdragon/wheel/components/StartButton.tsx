"use client"
import React from 'react'

interface StartButtonProps {
    isSpin: boolean,
    onClick: () => void
}
const StartButton = ({ isSpin, onClick }: StartButtonProps) => {

    console.log(isSpin, 'isSpin')
    const isDisable = false && isSpin

    let buttonStyle = "w-full  h-full rounded-[124px] border-solid border-[#818181] border-[1px] text-[18px]"

    if (isSpin) {
        buttonStyle = buttonStyle + " border-[#FFb422] transition-all"
    }

    return (
        <div className='mt-6 w-[340px] p-8 h-[144px] bg-[#101010] rounded-[120px] flex items-center justify-center'>
            <button onClick={onClick} disabled={isDisable} className={buttonStyle}>
                {
                    isSpin ? "Wating..." : "Free Start"
                }
            </button>
        </div>

    )
}

export default StartButton