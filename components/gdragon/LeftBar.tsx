
"use client"
import React, { useState } from 'react'
import LeftBarActive from '../UI/LeftBarActive'
import Home from '../UI/Home'
import Home1 from '../UI/Home1'
import Stake from '../UI/Stake'
import Stake1 from '../UI/Stake1'
import Quest1 from '../UI/Quest1'
import Quest from '../UI/Quest'
import Wheel from '../UI/Wheel'
import Wheel1 from '../UI/Wheel1'
import Update from '../UI/Update'
import Update1 from '../UI/Update1'
import Iventory from '../UI/Iventory'
import Iventory1 from '../UI/Iventory1'
import Link from 'next/link'

const LeftBar = () => {
    const [active, setActive] = useState(0)

    const LeftBars = [
        {
            name: 'Home',
            icon: <Home />,
            icon1: <Home1 />,
            href: '/gdragon'
        },
        {
            name: 'Stake',
            icon: <Stake />,
            icon1: <Stake1 />,
            href: '/gdragon/stake'
        },
        {
            name: 'Quest',
            icon: <Quest />,
            icon1: <Quest1 />,
            href: '/gdragon/quest'

        },
        {
            name: 'Lucky Wheel',
            icon: <Wheel />,
            icon1: <Wheel1 />,
            href: '/gdragon/wheel'
        },
        {
            name: 'Upgrade',
            icon: <Update />,
            icon1: <Update1 />,
            href: '/gdragon/upgrade'
        },
        {
            name: 'Inventory',
            icon: <Iventory />,
            icon1: <Iventory1 />,
            href: '/gdragon/stash'
        },
    ]

    const onHover = (index: number) => {
        setActive(index)
    }

    return (
        <div className='bg-gray w-[224px] rounded-xl py-4 flex flex-col gap-4'>
            {
                LeftBars.map((item, index) => {
                    const isActive = active === index
                    return <Link href={item.href} key={index}>
                        <div className='cursor-pointer' onMouseOver={() => onHover(index)}>
                            <div className='flex items-center  h-[40px] relative'>
                                {
                                    isActive &&
                                    <div className='-ml-2 absolute'>
                                        <LeftBarActive />
                                    </div>
                                }
                                <div className='ml-6'>{
                                    isActive ? item.icon1 : item.icon
                                }</div>
                                <div className={`ml-2 font-[500] text-[14px] ${active === index ? "text-[#FFB422]" : ""} `}>{item.name}</div>
                            </div>
                        </div>
                    </Link>
                })
            }</div>
    )
}

export default LeftBar