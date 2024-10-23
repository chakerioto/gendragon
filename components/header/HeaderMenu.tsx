import Link from 'next/link'
import React from 'react'

const HeaderMenu = () => {
    return (
        <ul className='flex list-none items-center gap-[50px]'>
            <Link href="/">
                <li className='hover:text-[#FFB422] cursor-pointer'>Home</li>
            </Link>
            <Link href="/">
                <li className='hover:text-[#FFB422] cursor-pointer'>About</li>
            </Link>
            <Link href="/">
                <li className='hover:text-[#FFB422] cursor-pointer'>Collection</li>
            </Link>
            <Link href="/">
                <li className='hover:text-[#FFB422] cursor-pointer'>App</li>
            </Link>
        </ul>
    )
}

export default HeaderMenu