import React from 'react'
import Noti from '../UI/Noti'
import Mail from '../UI/Mail'
import Avatar from './Avatar'

const HeaderRight = () => {
    return (
        <div className='flex'>
            <div className='flex items-center justify-center gap-6'>
                <div className='cursor-pointer'>
                    <Noti />
                </div>
                <div className='cursor-pointer'>
                    <Mail />
                </div>
            </div>
            <div className='ml-8 flex justify-center items-center'>
                <Avatar />
                <div className='ml-4'>
                    <p>Wade Warren</p>
                    <p className=' text-yellow'>0x903...1234g</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderRight