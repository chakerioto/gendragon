import React from 'react'

const ActionButton2 = ({ onClick, msg }: any) => {
    return (
        <button className=' text-[12px] rounded-[40px] border-solid border-[1px] border-white px-10 py-2' onClick={onClick}>{
            msg
        }</button>
    )
}

export default ActionButton2