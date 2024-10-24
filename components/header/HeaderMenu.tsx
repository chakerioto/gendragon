"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderMenu = () => {
    const pathName = usePathname();

    const isAppPage = pathName === "/gdragon"


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
            <Link href="/gdragon">
                <li
                    className={`${isAppPage ? "text-[#FFB422]" : ""} hover:text-[#FFB422] cursor-pointer`}
                >
                    App
                </li>
            </Link>
        </ul>
    )
}

export default HeaderMenu