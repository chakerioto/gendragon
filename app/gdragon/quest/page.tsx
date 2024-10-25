"use client"
import DailyCheckInCard from '@/components/quest/DailyCheckinCard'
import CountdownTimer from '@/components/quest/Quest'
import RewardsGrid from '@/components/quest/RewardGrid'
import ActionButton1 from '@/components/stake/ActionButton1'
import SmallText from '@/components/typo/SmallText'
import SmallText1 from '@/components/typo/SmallText1'
import GodCoin1 from '@/components/UI/GodCoin1'
import { usePathname } from 'next/navigation'
import React from 'react'



const AppQuestPage = () => {
    const pathName = usePathname()

    const pass = [
        {
            id: 1,
            type: 'Silver',
        },
        {
            id: 2,
            type: 'Gold',
        },
        {
            id: 3,
            type: 'Gold',
        },
        {
            id: 1,
            type: 'Silver',
        },
        {
            id: 2,
            type: 'Gold',
        },
        {
            id: 3,
            type: 'Gold',
        },
    ]

    return (
        <div >
            <div className='flex items-center content-between'>
                <div className="relative flex w-[424px] h-[80px] items-center">
                    <div className="-ml-1 absolute inset-0 bg-black opacity-90 z-[11]"></div>
                    <p className="uppercase text-[40px] font-[500] relative z-10 wildworld">daily quest</p>
                </div>
                <div className='ml-auto'>
                    <CountdownTimer />
                </div>
            </div>
            <div className='flex mt-6 gap-6'>
                <DailyCheckInCard />
                <RewardsGrid/>
            </div>
        </div>
    )
}

export default AppQuestPage