import React from 'react'
import GodCoin from '../UI/GodCoin'

interface Point {
    textSize?: string,
    hideGod?: boolean
}
const Point = (props: Point) => {
    const { textSize, hideGod } = props
    let cssClass = "font-[700]"
    if (textSize) {
        cssClass += ` text-[${textSize}px]`
    }

    let price: any = '12,000,000 GOD'
    if (hideGod) {
        const match = price.match(/[\d,]+/);
        price = match ? match[0] : null;
    }


    return (
        <div className='flex items-center'>
            <p className={cssClass}>{price}</p>
            <div className='ml-2'>
                <GodCoin />
            </div>
        </div>
    )
}

export default Point