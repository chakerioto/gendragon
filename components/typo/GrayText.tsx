import React from 'react'
interface props {
    msg: string,
}
const GrayText = ({ msg }: props) => {

    return (
        <div className='font-[500] text-[16px] text-[#818181] uppercase'>{msg}</div>
    )
}

export default GrayText