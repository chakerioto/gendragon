import React from 'react'

interface props {
    onClick: any,
    msg: string,

}
const ActionButton1 = ({ onClick, msg }: props) => {
    return (
        <button
            onClick={onClick}
            className='rounded-[40px] px-10 py-2 text-[12px] font-[700] text-black border-solid border-[1px]'>
            {
                msg
            }
        </button>
    )
}

export default ActionButton1