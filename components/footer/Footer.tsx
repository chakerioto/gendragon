import React from 'react'
import SmallText from '../typo/SmallText'
import SmallText1 from '../typo/SmallText1'
import GreenDot from '../UI/GreenDot'

const Footer = () => {
    return (
        <div className='flex items-center justify-center bg-gray h-[43px]'>
            <div className='max-w-[1280px] w-screen flex items-center'>
                <SmallText
                    str='© Copyright 2023-2024 '
                />
                &nbsp;
                <SmallText1
                    str='Gen of Dragon .'
                />
                &nbsp;
                <SmallText
                    str='All rights reserved.'
                />
                <div className='ml-auto flex items-center gap-8'>
                    <SmallText
                        str='Terms and Conditions'
                    />
                    <GreenDot />
                    <SmallText
                        str='Privacy Policy'
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer