import Image from 'next/image'
import React from 'react'

const Avatar = () => {
    return (
        <div className='w-[50px] h-[50px] rounded-full bg-gray flex items-center justify-center'>
            <div>
                <Image src="/pepe.jpg" width={30} height={30} alt='' />
            </div>
        </div>
    )
}

export default Avatar