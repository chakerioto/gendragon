import React from 'react'

interface props {
    mes: string
}
const YellowText1 = ({ mes }: props) => {
    return (
        <p className='text-[12px] font-[300] text-[#ffb422] uppercase'>
            {mes}
        </p>
    )
}

export default YellowText1