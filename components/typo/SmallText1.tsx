import React from 'react'

type Props = {
    str: string
}
const SmallText1 = (props: Props) => {
    const { str } = props
    return (
        <span className='font-[700] text-[12px]'>
            {str}
        </span>
    )
}

export default SmallText1