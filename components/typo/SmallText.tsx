import React from 'react'

type Props = {
    str: string
}
const SmallText = (props: Props) => {
    const { str } = props
    return (
        <span className='text-[#BDBDBD] text-[12px] font-[400] '>
            {str}
        </span>
    )
}

export default SmallText