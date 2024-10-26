import React from 'react'
import GodCoin1 from './UI/GodCoin1'
interface props {
    title: string,
    info: number | string,
    godcoin?: boolean
}
const CardInfoSmall = (props: props) => {
    const { title, info, godcoin } = props
    return (
        <div className='px-4 py-2 rounded-xl bg-[#101010] w-[247px] h-[80px] flex flex-col justify-between'>
            <p className='text-[#FFB422] font-[300] text-[12px] uppercase'>
                {title}
            </p>
            <p className='font-[700] flex gap-2'>
                {info}
                {
                    godcoin && <span>
                        <GodCoin1 />
                    </span>
                }
            </p>
        </div>
    )
}

export default CardInfoSmall